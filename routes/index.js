const binance = require('node-binance-api');
var express = require('express');
var router = express.Router();
var AWS = require('aws-sdk');
var _ = require('lodash');

/* GET users listing. */
router.get('/', function (req, res, next) {

	binance.options({
		'APIKEY': process.env.binanceKey,
		'APISECRET': process.env.binanceSecret
	});

	function execution_update(data) {
		let { x: executionType, s: symbol, p: price, q: quantity, S: side, o: orderType, i: orderId, X: orderStatus } = data;
		let message = '';
		const key = executionType + '-' + orderId;
		let counter = 0;

		message = executionType + ' ' + symbol + ' ' + side + ' ' + orderType + ' ' + price + ' ' + quantity;

		try {
			AWS.config.region = process.env.awsSNSRegion;
			AWS.config.update({
				accessKeyId: process.env.awsKeyId,
				secretAccessKey: process.env.awsSecret
			});

			const sns = new AWS.SNS();
			const params = {
				Message: message,
				MessageStructure: 'string',
				PhoneNumber: process.env.phoneNumber,
				Subject: 'Order Alert'
			};

			sns.publish(params, function (err, data) {
				if (err) { console.log(err, err.stack); } // an error occurred
				else { console.log(data); }
			});
		} catch (error) {
			console.log(error);
		}
	}
	binance.websockets.userData(function () { console.log('1'); }, execution_update);
});

module.exports = router;

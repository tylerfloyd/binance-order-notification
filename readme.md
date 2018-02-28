# Binance Order Notifications

Binance does not currently offer notications when orders are created, cancelled or fulfilled. This will allow you to always stay current of your order's status.  

### Prerequisites

AWS SNS account
Binance API credentials

### Installing

Create AWS SNS User

```
Default SNS user should suffice
```

Generate Binance API keys (do not enable trading nor withdrawls)

Create the following environment variables

```
export binanceKey=[binance_api_key]
export binanceSecret=[binance_api_secret_key]
export awsSNSRegion=[aws_region]
export awsKeyId=[aws_sns_user_key_id]
export awsSecret=[aws_sns_user_secret_key]
export phoneNumber=[phone_numer] (for US numbers, add a 1 infront of area code)
```

Once set up, `yarn start` and enjoy notifications on the go!

or try the Docker version and edit the variables inside the *Dockerfile*

```
docker build -t binance-sns .
docker run --rm -dt --name binance-sns binance-sns
```

## Built With

* [Node Binance API](https://github.com/jaggedsoft/node-binance-api) - Interface with Binance's websockets
* [Express](https://github.com/expressjs/express) - Dependency Management

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Donante

* ETH: 0xf5952d84247EAE8cD1A1289e9DaAa6e950fE25E6
* BTC: 1DGQ8EX53Gz8N7LaCfK24HqrXuQmsvhuf1
* LTC: LYJZrC7VpeECAyCUWtvqJinPrPNorYJ3Kq

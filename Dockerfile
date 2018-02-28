FROM node:8.9.4
#FROM node:alpine
ENV binanceKey=[binance_api_key]
ENV binanceSecret=[binance_api_secret_key]
ENV awsSNSRegion=[aws_region]
ENV awsKeyId=[aws_sns_user_key_id]
ENV awsSecret=[aws_sns_user_secret_key]
ENV phoneNumber=[phone_numer]
# (for US numbers, add a 1 infront of area code)
ADD ./ /app
WORKDIR /app
ENTRYPOINT ["yarn", "start”]

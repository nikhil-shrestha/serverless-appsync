"use strict";

module.exports.graphql = async (event, context) => {
  console.log("Received event {}", JSON.stringify(event, 3));

  const consumerKey = event.arguments.consumer_key;
  const consumerSecret = event.arguments.consumer_secret;

  console.log("Got an Invoke Request.");

  try {
    if (event.field == "helloWorld") {
      return {
        statusCode: 200,
        body: JSON.stringify({
          message: "Hello World"
        })
      };
    }

    return {
      statusCode: 500,
      body: JSON.stringify({
        message: `Unknown field, unable to resolve ${event.field}`
      })
    };
  } catch (err) {
    return {
      statusCode: 500
    };
  }

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

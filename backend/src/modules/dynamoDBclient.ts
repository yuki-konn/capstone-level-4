import { DynamoDB } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocument } from "@aws-sdk/lib-dynamodb";
import dotenv from "dotenv";

dotenv.config();

export const dynamoDBClient: DynamoDBDocument = getDynamoDBClient();

// DynamoDB Client function that returns DynamoDBDocument.
function getDynamoDBClient(): DynamoDBDocument {
  const apiKey = {
    region: process.env.region,
    credentials: {
      accessKeyId: process.env.accessKeyId,
      secretAccessKey: process.env.secretAccessKey,
    },
  };

  // DynamoDB Client
  const client = new DynamoDB(apiKey);
  const niceClient = DynamoDBDocument.from(client);
  return niceClient;
}

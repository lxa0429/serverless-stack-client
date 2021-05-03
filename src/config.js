
const config = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-upload-lmk",
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://rdxrtjxoqi.execute-api.us-east-1.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_hqJ6cVkz5",
    APP_CLIENT_ID: "7b7k31i3r58ihvpnjkfi3qebhl",
    IDENTITY_POOL_ID: "us-east-1:6ae9025f-d591-477e-91d4-846f351152bd",
  },
};

export default config;
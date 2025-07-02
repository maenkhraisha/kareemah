import {
    Client,
    Account,
    Databases,
    Storage,
    Functions,
    Avatars,
} from "react-native-appwrite";

const client = new Client();

client
    .setEndpoint("https://fra.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("685c7363003bffd3ee80") // Your project ID
    .setPlatform("com.maen.kareemah"); // Your app bundle ID

const account = new Account(client);
const databases = new Databases(client);
const storage = new Storage(client);
const functions = new Functions(client);
const avatars = new Avatars(client);

export { client, account, databases, storage, functions, avatars };

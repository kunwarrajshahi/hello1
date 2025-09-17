// ... (your existing code) ...
const admin = require("firebase-admin");
const cors = require("cors");
const bodyParser = require("body-parser");
// No need for fs or path modules anymore.

// Initialize Firebase Admin
function initializeFirebase() {
  try {
    const serviceAccountData = process.env.FIREBASE_SERVICE_ACCOUNT;
    if (!serviceAccountData) {
      throw new Error("FIREBASE_SERVICE_ACCOUNT environment variable is not set.");
    }
    const serviceAccount = JSON.parse(serviceAccountData);

    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
    console.log("Firebase Admin SDK initialized successfully.");
  } catch (error) {
    console.error("Failed to initialize Firebase Admin SDK:", error);
    process.exit(1);
  }
}

// Call the initialization function
initializeFirebase();

// const app = express();
app.use(cors());
app.use(bodyParser.json());

// ... (your routes and logic) ...

// Export the app for Vercel

// ... (your existing code) ...
const admin = require("firebase-admin");
const cors = require("cors");
const bodyParser = require("body-parser");

// Initialize Firebase Admin
function initializeFirebase() {
  try {
    const serviceAccountData = process.env.FIREBASE_SERVICE_ACCOUNT;
    if (!serviceAccountData) {
      throw new Error("FIREBASE_SERVICE_ACCOUNT environment variable is not set.");
    }
    const serviceAccount = JSON.parse(serviceAccountData);

    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
    console.log("Firebase Admin SDK initialized successfully.");
  } catch (error) {
    console.error("Failed to initialize Firebase Admin SDK:", error);
    process.exit(1);
  }
}

// Call the initialization function
initializeFirebase();

const app = express();
app.use(cors());
app.use(bodyParser.json());



module.exports = app;
/**
  apiKey: "AIzaSyCO-XymQ_bNlKdpjfo8QL_hWKs63uJkOJI",
  authDomain: "kriskraai-e6c8c.firebaseapp.com",
  databaseURL: "https://kriskraai-e6c8c.firebaseio.com",
  projectId: "kriskraai-e6c8c",
  storageBucket: "kriskraai-e6c8c.appspot.com",
  messagingSenderId: "368397077198",
  appId: "1:368397077198:web:90387eab19e4cd72"
**/
import app from "firebase/app";
import "firebase/auth";

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
  }
  // *** Auth API ***

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();
  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);
}

export default Firebase;

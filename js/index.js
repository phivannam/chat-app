
window.onload = () => {
    // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDY8wRhM6A9oIOktW2dxwZi61B6wKInqzw",
    authDomain: "chat-app-57f59.firebaseapp.com",
    databaseURL: "https://chat-app-57f59.firebaseio.com",
    projectId: "chat-app-57f59",
    storageBucket: "",
    messagingSenderId: "116622390934",
    appId: "1:116622390934:web:48c2f52b64aca793"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  console.log(firebase);
  //show welcome screen
    view.setActiveScreen('loginPage');
};
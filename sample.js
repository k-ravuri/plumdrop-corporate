  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDnxO0uJ3uLnnuapAIzDEsAoEDpuhNXFUI",
    authDomain: "plumdrop-business.firebaseapp.com",
    databaseURL: "https://plumdrop-business.firebaseio.com",
    projectId: "plumdrop-business",
    storageBucket: "plumdrop-business.appspot.com",
    messagingSenderId: "1014652124168"
  };
  firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('Users');

// Listen for form submit
document.getElementById('SignUp').addEventListener('submit', logout);

function logout(){
  firebase.auth().signOut();
}
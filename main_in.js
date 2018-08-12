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

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    var user = firebase.auth().currentUser;
  } else {
    console.log("invalid login");
  }
});

// Listen for form submit
document.getElementById('SignIn').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){

  var userEmail = document.getElementById("email").value;
  var userPass = document.getElementById("password").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });
}



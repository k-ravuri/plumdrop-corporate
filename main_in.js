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

// Listen for form submit
document.getElementById('SignIn').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var company = getInputVal('company');
  var email = getInputVal('email');
  var password = getInputVal('password');
  var auth = firebase.auth();
  auth.onAuthStateChanged(user => {
    if(user){
      window.location.replace("sample.html");
    } else {
      window.location.replace("index.html");
    }
  });
  

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  // document.getElementById('SignIn').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}


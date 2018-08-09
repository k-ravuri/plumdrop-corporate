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
document.getElementById('SignIn').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var fname = getInputVal('fname');
  var lname = getInputVal('lname');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var password = getInputVal('password');

  // Save message
  saveMessage(fname, lname ,company, email, password);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('SignUp').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(fname, lname ,company, email, password){
  var messagesRefCompany = messagesRef.ref(company);
  var newMessageRef = messagesRefCompany.push();
  newMessageRef.set({
    fname: fname,
    lname: lname,
    email:email,
    organizer:false,
    password:password,
  });
}
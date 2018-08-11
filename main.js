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
document.getElementById('SignUp').addEventListener('submit', submitForm);


// Submit form
function submitForm(e){
  e.preventDefault();

  // // Get values
  // var file = e.target.files[0];

  // var storageRef = firebase.storage().ref();
  // var uploadRef = storageRef.child("company_logos/" + file.name).put(file);
  var fname = getInputVal('fname').toLowerCase();
  var lname = getInputVal('lname').toLowerCase();
  var company = getInputVal('company').toLowerCase();
  var email = getInputVal('email').toLowerCase();
  var password = getInputVal('password');

  // Save message
  saveMessage(fname, lname, company, email, password);
  auth = firebase.auth();
  auth.createUserWithEmailAndPassword(email,password);
  promise.catch(e => console.log(e.message));

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
function saveMessage(fname, lname, company, email, password){
  var newComapnyChild = messagesRef.child(company)
  var newMessageRef = newComapnyChild.push();
  newMessageRef.set({
    fname: fname,
    lname: lname,
    email:email,
    organizer:false,
    password:password,
  });
}
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    window.location.replace("signin.html");
  } else {
    console.log("invalid login");
  }
});

function logOut(e) {
      firebase.auth().signOut();
      window.location.replace("signin.html");
 }
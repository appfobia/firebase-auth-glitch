
var firebase = window.firebase;


$(function() {
  console.log('hello world :o')
  
  
  document.getElementById("signup-btn").addEventListener("click",(event)=>{
    const email = document.getElementById("email").value;
    const pass = document.getElementById("pass").value;
    firebase.auth().createUserWithEmailAndPassword(email,pass).then(function(user) { 
          console.log(user);
          }).catch(function(error){
      const f = error.code.split('/')[1];
      console.log('ERROR: '+f);
      document.getElementById("email").value = 'ERROR: '+f;
          });
  });

  document.getElementById("signin-btn").addEventListener('click', e=>{
    const email = document.getElementById("email").value;
    const pass = document.getElementById("pass").value;
    const promise = firebase.auth().signInWithEmailAndPassword(email, pass);
    promise.catch(error=>{ 
      const f = error.code.split('/')[1];
      console.log('ERROR: '+f);
      document.getElementById("email").value = 'ERROR: '+f;
    });
})
  
  document.getElementById("signout-btn").addEventListener('click', e=>{
    firebase.auth().signOut();

    //document.getElementById("email").value = 'Logged out :)';
})
  
  firebase.auth().onAuthStateChanged(user=>{ 
  if(user){  // logged in
    document.getElementById("signout-btn").classList.remove('hide');
    document.getElementById("signup-btn").classList.add('hide');
    document.getElementById("signin-btn").classList.add('hide');
    console.log("Logged in :o");
    console.log(user.email);
  } else{
    document.getElementById("signout-btn").classList.add('hide');
    document.getElementById("signup-btn").classList.remove('hide');
    document.getElementById("signin-btn").classList.remove('hide');
    //console.log("onAuthChange");
    console.log("logged out");
  }
})
  
  

})





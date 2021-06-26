
//ADD YOUR FIREBASE LINKS HERE ⬇️
var firebaseConfig = {
      apiKey: "AIzaSyA_TX2MbgOUXWAGBd_kMJ0iTx4KHErsjBw",
      authDomain: "kwitter-79d9e.firebaseapp.com",
      databaseURL: "https://kwitter-79d9e-default-rtdb.firebaseio.com",
      projectId: "kwitter-79d9e",
      storageBucket: "kwitter-79d9e.appspot.com",
      messagingSenderId: "187807351467",
      appId: "1:187807351467:web:879545d17fdd2614396dee"
    };

    //logout
    function logout()
    {
      
      window.location="index.html";  
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

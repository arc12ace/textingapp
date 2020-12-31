var firebaseConfig = {
      apiKey: "AIzaSyB7dovZhQwLIIgqCO8qeRQmyUL-u4w4a1Q",
      authDomain: "texter-a4885.firebaseapp.com",
      databaseURL: "https://texter-a4885-default-rtdb.firebaseio.com",
      projectId: "texter-a4885",
      storageBucket: "texter-a4885.appspot.com",
      messagingSenderId: "432196829372",
      appId: "1:432196829372:web:43cc411e7326830944d0b9"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

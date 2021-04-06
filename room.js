var firebaseConfig = {
    apiKey: "AIzaSyA2MTiD8Tvi_kOgLZwuQeSuf7vMTkrXV0o",
    authDomain: "kwitter-app-bc535.firebaseapp.com",
    databaseURL: "https://kwitter-app-bc535-default-rtdb.firebaseio.com",
    projectId: "kwitter-app-bc535",
    storageBucket: "kwitter-app-bc535.appspot.com",
    messagingSenderId: "307345134973",
    appId: "1:307345134973:web:32783b95e0bc2eb169a814",
    measurementId: "G-G9CQK8HBJE"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  
  

    user_name = localStorage.getItem("user_name");
  
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
  
  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
  
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });
  
      localStorage.setItem("room_name", room_name);
      
      window.location = "kwitter_page.html";
  }
  
  function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
         Room_names = childKey;
         console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;
      });
    });
  
  }
  
  getData();
  
  function redirectToRoomName(name)
  {
    console.log(name);
    localStorage.setItem("room_name", name);
      window.location = "lets chat page.html";
  }
  
  function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
      window.location = "letschat login.html";
  }
  

  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDxDXPNUIamSqGpzIf1p_UL5ywzP4Kv_As",
    authDomain: "form-65f4d.firebaseapp.com",
    projectId: "form-65f4d",
    storageBucket: "form-65f4d.appspot.com",
    messagingSenderId: "879868034641",
    appId: "1:879868034641:web:d3d32442586898ade24270"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = firebase.auth();


  function signup(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.createUserWithEmailAndPassword(email,value,password,value);
    promise.catch(e=>alert(e.message));
    alert("Signed In");
  }

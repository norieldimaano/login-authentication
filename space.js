
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getDatabase, } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyCnEjuzreX82CtmIh6iPhH6N-f8ZZSRbeo",
authDomain: "chat-app-database-5cb97.firebaseapp.com",
databaseURL: "https://chat-app-database-5cb97-default-rtdb.asia-southeast1.firebasedatabase.app",
projectId: "chat-app-database-5cb97",
storageBucket: "chat-app-database-5cb97.appspot.com",
messagingSenderId: "365674042024",
appId: "1:365674042024:web:b14bdd56229c579e35e89d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();

let logout = document.getElementById("logout-btn")
logout.addEventListener("click", (e) =>{
window.location.assign("index.html")
signOut(auth).then(() => {
//Sign-out successful
alert("User Logged Out")
}).catch((error) => {
//An error happened.
const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
});
})
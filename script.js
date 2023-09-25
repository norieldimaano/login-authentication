//-------Signup/in-Button-------//
let signupBtnEl = document.getElementById("signupBtn")
let signinBtnEl = document.getElementById("signinBtn")
let nameFieldEl = document.getElementById("nameField")
let titleEl = document.getElementById("title")

    signinBtnEl.onclick = function(){
        nameFieldEl.style.maxHeight = 0
        titleEl.innerHTML = "Sign in"
        signupBtnEl.classList.add("disable")
        signinBtnEl.classList.remove("disable")
    }

    signupBtnEl.onclick = function(){
        nameFieldEl.style.maxHeight = "65px"
        titleEl.innerHTML = "Sign up"
        signinBtnEl.classList.add("disable")
        signupBtnEl.classList.remove("disable")
    }

//-------Firebase-Database-------//
    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
    import { getDatabase, set, ref, update } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";
    import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
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

signupBtnEl.addEventListener("click",(e) =>{

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    const form = document.getElementById("myForm")
    
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        setTimeout(function(){
                return alert("User Created")
            },)
            form.reset()
        const user = userCredential.user;

        set(ref (database, `users/` + user.uid),{
            name: name,
            email: email
        })
    })
    
    .catch((error) => {
       const errorCode = error.code;
       const errorMessage = error.message;
        alert(errorMessage)
    });
})

signinBtnEl.addEventListener("click", (e) =>{
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            window.location.assign("space.html")
            const user = userCredential.user;
            const dt = new Date();

            update(ref (database, `users/` + user.uid),{
            last_login: dt,
            })
            
            alert("Signed in")
        })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            alert(errorMessage)
    });
});
const user = auth.currentUser;
onAuthStateChanged(auth, (user) => {
    if (user) {
        const uid = user.uid;
    } else {
    }
});

        

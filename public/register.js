function register() {
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log("Registrovaný používateľ: ", user);
            window.location.href = "Blog.html"; // Presmerovanie po úspešnej registrácii
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            document.getElementById('registerError').textContent = `Chyba pri registrácii: ${errorMessage}`;
            console.error("Chyba pri registrácii: ", errorCode, errorMessage);
        })
        }
        
        import { initializeApp } from "firebase/app";
        import { getAnalytics } from "firebase/analytics";
        
        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries
        
        // Your web app's Firebase configuration
        // For Firebase JS SDK v7.20.0 and later, measurementId is optional
        const firebaseConfig = {
            apiKey: "AIzaSyAJ20-FIFbWdRDQOfsWm14Uu1-3_xTc4yM",
            authDomain: "dejepis-54f7a.firebaseapp.com",
            databaseURL: "https://dejepis-54f7a-default-rtdb.europe-west1.firebasedatabase.app",
            projectId: "dejepis-54f7a",
            storageBucket: "dejepis-54f7a.firebasestorage.app",
            messagingSenderId: "314614671282",
            appId: "1:314614671282:web:1cd2c26cf707de4222e6ab",
            measurementId: "G-56B12R258Q"
        };

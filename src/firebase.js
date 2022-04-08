import firebase from "firebase";



const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAbwfdg6WaNWpCQaeRdl_Tw8M1ZFDqaSko",
    authDomain: "whatsapp-clone-d5d0f.firebaseapp.com",
    projectId: "whatsapp-clone-d5d0f",
    storageBucket: "whatsapp-clone-d5d0f.appspot.com",
    messagingSenderId: "282924395924",
    appId: "1:282924395924:web:9b550ad47ef6f5edfa3381",
    measurementId: "G-FRLRYVNBR4"
})

const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()


export {db,auth,provider}
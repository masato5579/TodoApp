import firebase from 'firebase/app'

import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCuqwttJ1GlhLtitFk35Y79vPNLvynwnSQ",
    authDomain: "todoapp-e0349.firebaseapp.com",
    projectId: "todoapp-e0349",
    storageBucket: "todoapp-e0349.appspot.com",
    messagingSenderId: "70944741250",
    appId: "1:70944741250:web:32b1ba3a46e415f29de19b"
}

firebase.initializeApp(firebaseConfig) //firebaseの初期化

export default firebase

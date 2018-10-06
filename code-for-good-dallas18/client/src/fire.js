import firebase from 'firebase'
var config = {
    apiKey: "",
    authDomain: "code-for-good-dallas2018.firebaseapp.com",
    databaseURL: "https://code-for-good-dallas2018.firebaseio.com",
    projectId: "code-for-good-dallas2018",
    storageBucket: "code-for-good-dallas2018.appspot.com",
    messagingSenderId: "105705440070"
};
var fire = firebase.initializeApp(config);
export default fire;
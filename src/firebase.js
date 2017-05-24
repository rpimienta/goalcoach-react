import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBKMF0yongiMaKWpRn4ffMR2G67_2FMon4",
    authDomain: "goal-coach-5edf3.firebaseapp.com",
    databaseURL: "https://goal-coach-5edf3.firebaseio.com",
    projectId: "goal-coach-5edf3",
    storageBucket: "goal-coach-5edf3.appspot.com",
    messagingSenderId: "901506450756"
  };

  export const firebaseApp = firebase.initializeApp(config);
  export const goalRef = firebase.database().ref('goals');
  export const completeGoalRef = firebase.database().ref('completeGoals');
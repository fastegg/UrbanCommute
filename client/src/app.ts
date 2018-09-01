import { load as load_firebase } from 'api/firebase';
import { ReactApp } from 'view';
import { newMap } from 'api/maps';
import { Loading } from 'view/loading';

const app = new ReactApp(document.getElementById('appView'));

async function start() {
  app.mount(Loading);
  load_firebase();
}

document.addEventListener('DOMContentLoaded', function() {
  // // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
  // // The Firebase SDK is initialized and available here!
  //
  // firebase.auth().onAuthStateChanged(user => { });
  // firebase.database().ref('/path/to/ref').on('value', snapshot => { });
  // firebase.messaging().requestPermission().then(() => { });
  // firebase.storage().ref('/path/to/ref').getDownloadURL().then(() => { });
  //
  // // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥

  try {
    //document.getElementById('load').innerHTML = `Firebase SDK loaded!`;
    start();
    //newMap(document.getElementById('map'), {center: {lat: -25.363, lng: 131.044}, zoom: 4});
  } catch (e) {
    console.error(e);
    document.getElementById('load').innerHTML = 'Error loading the Firebase SDK, check the console.';
  }
});
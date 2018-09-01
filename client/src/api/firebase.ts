import * as firebase from 'firebase';
import { firebaseConfig } from 'keys/keys';

export function load () {
  try {
    let app = firebase.initializeApp(firebaseConfig, 'UrbanCommute');
    let features = ['auth', 'database', 'messaging', 'storage'].filter(feature => typeof app[feature] === 'function');
  } catch (e) {
    console.error(e);
  }
  
}
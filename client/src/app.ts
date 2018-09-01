import { load as load_firebase } from 'api/firebase';
import { ReactApp } from 'view';
import { newMap } from 'api/maps';
import { AppError } from 'view/appError';

const app = new ReactApp(document.getElementById('appView'));

async function start() {
  app.mount(AppError);
  try {
    load_firebase();
    this.shouldCrash(); //TODO: REMOVE ME! IT CRASHES!!!!
  } catch (e) {
    console.error(e);
    
    //Unable to setup, show error screen
    return app.mount(AppError);
  }
  //All clear, mount the app
  //newMap(document.getElementById('map'), {center: {lat: -25.363, lng: 131.044}, zoom: 4});
}

document.addEventListener('DOMContentLoaded', start);
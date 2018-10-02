import 'types';

import { load as load_firebase } from 'api/firebase';
import { ReactApp } from 'view';
import { AppError } from 'view/appError';
import { Home } from 'view/home';
import 'nav/navigation';

declare global {
  type StashOf<t> = {[x:string]: t};
}

const app = new ReactApp(document.getElementById('appView'));

async function start() {
  try {
    load_firebase();
  } catch (e) {
    console.error(e);
    //Unable to setup, show error screen
    return app.mount(AppError);
  }
  //All clear, mount the app
  app.mount(Home);
  //newMap(document.getElementById('map'), {center: {lat: -25.363, lng: 131.044}, zoom: 4});
}

document.addEventListener('DOMContentLoaded', start);
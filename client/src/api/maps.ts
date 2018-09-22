import * as Maps from 'google-maps';
import { googleMapsKey } from 'keys/keys';
import { post } from './url';

let gmaps = null;
let afterload = [];

interface LatLng {
  lat: number,
  lng: number,
};

Maps.KEY = googleMapsKey;
Maps.VERSION = 'weekly';
Maps.load((g) => {
  gmaps = g.maps;

  for (let params of afterload) {
    const func = params.splice(0,1);
    func[0].apply(null, params);
  }
});

const liveMaps = {};

export function newMap(key: string, el: Element, options) {
  if (!gmaps) {
    afterload.push([newMap, key, el, options]);
    return;
  }

  if (liveMaps[key]) {
    throw new Error(`Unable to create two maps with the same key: ${key}`);
  }

  liveMaps[key] = new gmaps.Map(el, options);

  return liveMaps[key];
};

export function getMap(key: string) {
  if (!liveMaps[key]) {
    throw new Error(`Key not found for map ${key}`);
  }

  return liveMaps[key];
}

export function unloadMap(key: string) {
  delete liveMaps[key];
}

export async function requestLocation(): Promise<LatLng> {
  if (navigator && navigator.geolocation) {
    return await new Promise<any>((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(pos => {
        resolve({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
      });
    });
  } else {
    return await getIPLocation();
  }
}

export async function zoomMapToCurrentLocation(mapID): Promise<void> {
  try {
    const loc = await requestLocation();
    const map = liveMaps[mapID];

    if (map) {
      map.panTo(loc);
      map.setZoom(15);
    }
  } catch(e) {
    //TODO: Check for permission denied, or log actual error
  }

}

async function getIPLocation(): Promise<any> {
  const request = `https://www.googleapis.com/geolocation/v1/geolocate?key=${googleMapsKey}`;

  try {
    const response = await post(request, {});
    console.log(response);
  } catch(e) {
    console.error(e);
  }
}
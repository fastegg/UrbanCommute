import * as Maps from 'google-maps';
import { googleMapsKey } from 'keys/keys';
import { DOMElement } from 'react';

let gmaps = null;
let afterload = [];

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
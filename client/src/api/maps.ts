import * as Maps from 'google-maps';
import { googleMapsKey } from '../keys/keys';

let gmaps = null;
let afterload = [];

Maps.KEY = googleMapsKey;
Maps.load((g) => {
  gmaps = g;

  for (let params of afterload) {
    const func = params.splice(0,1);
    func[0].apply(null, params);
  }
});

export function newMap(el, options) {
  if (!gmaps) {
    afterload.push([newMap, el, options]);
    return;
  }
  new gmaps.maps.Map(el, options);  
};
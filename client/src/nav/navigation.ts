window.addEventListener('popstate', locationChange);

function locationChange(e) {
  console.log('Popstate changed!', window.location.toString);
  console.log(e);
}

type StashOf<t> = {[x:string]: t};

export function go(url: string|string[], params?: StashOf<string>) {
  if (Array.isArray(url)) {
    url = url.join('/');
  }
  const paramString = !params ? '' : 
    '?' + Object.keys(params).sort().map(key => `${encodeURI(key)}=${encodeURI(params[key])}`).join('&');
  window.history.pushState({}, null, `/${url}${paramString}`);
}

export function back() {
  window.history.back();
}

export function fwd() {
  window.history.forward();
}
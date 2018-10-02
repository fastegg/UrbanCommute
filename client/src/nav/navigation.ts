window.addEventListener('popstate', locationChange);

function locationChange(e) {
  console.log('Popstate changed!', window.location.toString);
  console.log(e);
}

export function getFullUrl(url: string|string[], params?: StashOf<string>) {
  if (Array.isArray(url)) {
    url = '/' + url.join('/');
  }
  const paramString = !params ? '' : 
    '?' + Object.keys(params).sort().map(key => `${encodeURI(key)}=${encodeURI(params[key])}`).join('&');

  return `${url}${paramString}`;
}

/*
 * @param url: string if external, string[] if internal link
 * @param params: StashOf<string>, only for internal links, build param properties from it
 */
export function go(url: string|string[], params?: StashOf<string>) {
  if (typeof url === 'string') {
    //This is a full url, just go to it
    window.open(url, '_blank');
    return;
  }
  window.history.pushState({}, null, getFullUrl(url, params));
}

export function back() {
  window.history.back();
}

export function fwd() {
  window.history.forward();
}
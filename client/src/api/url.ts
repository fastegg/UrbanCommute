export function get(url, headers?): Promise<any> {
  return new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();
    req.addEventListener('load', ev => {
      resolve(req.response);
    });
    req.addEventListener('error', ev => {
      reject(req.response);
    });
    if (headers) {
      for (const key in headers) {
        req.setRequestHeader(key, headers[key]);
      }
    }
    req.open('GET', url);
    req.send();
  });
}

export function post(url, body: any): Promise<any> {
  return new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();
    req.addEventListener('load', ev => {
      resolve(req.response);
    });
    req.addEventListener('error', ev => {
      resolve(req.response);
    });
    req.open('POST', url);
    req.send(JSON.stringify(body));
  });
}
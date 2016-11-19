const get = url => {
  if(self.fetch) {
    return fetch(url);
  } else {
      return new Promise( (resolve, reject) => {
        let req = new XMLHttpRequest();
        req.open('GET', url);
        req.onload = () => {
          if (req.status == 200){ resolve(req.response); }
          else { reject(Error(req.statusText));}
        }
        req.onerror = () => {
          reject(Error('network error'));
        }
        req.send();
      });
    }
};

const getJson = url => {
  return get(url).then( jsonResponse => {
    return JSON.parse(jsonResponse);
  });
}

export default getJson;

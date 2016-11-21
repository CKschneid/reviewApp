const get = url => {
  if(self.fetch) {
    return fetch(url).then(r => r.json())
      .then(data => data)
      .catch(e => console.log(e))
  } else {
      return new Promise( (resolve, reject) => {
        let req = new XMLHttpRequest();
        req.open('GET', url);
        req.onload = () => {
          if (req.status == 200){ resolve(JSON.parse(req.response)); }
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
    return jsonResponse;
  });
}

export default getJson;

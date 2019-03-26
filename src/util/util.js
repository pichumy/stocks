export const makeRequest = (options) => {
  return new Promise( (resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open(options.method, options.url, true);
    xhr.onload = () => {
      if(xhr.status >= 200 && xhr.status < 300){
        resolve(xhr.responseText);
      }else{
        reject({
          status: xhr.status,
          statusText: xhr.statusText
        });
      }
    };
    xhr.onerror = () => {
      reject({
        status: xhr.status,
        statusText: xhr.statusText
      });
    };
    if (options.headers){
      Object.keys(options.headers).forEach((key) => {
        xhr.setRequestHeader(key, options.header[key]);
      });
    }
    let params = options.params;
    if(params && typeof params === 'object'){
      params = Object.keys(params).map((key) => {
        return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
      }).join('&');
    }
    xhr.send(params);
  });
}

function getImageUrl(url) {
  return new URL(url, import.meta.url).href;
}

function objProxy(mainObj, keys = [], rootObj = mainObj) {

  return new Proxy(mainObj, { get, set });

  function get(obj, key, isProxy = true) {

    if (key === Symbol.iterator) {
      return obj[Symbol.iterator].bind(obj);
    }

    key = key.toString();

    if (key == undefined) return obj;

    let result = obj;
    for (let k of key.split(',')) {

      if (result[k] != undefined) result = result[k];
      else break;

      try {
        if (typeof (result) === 'string') result = JSON.parse(result);
      }
      catch { }
    }
    if (result === obj) return undefined;



    if (isProxy && typeof (result) === 'object' && result != undefined) {
      result = objProxy(result, keys.concat(key), rootObj);
    }

    return result;
  }

  function set(obj, key, val) {

    if (keys.length !== 0) {
      const originalKey = keys[0];

      const preObj = get(rootObj, originalKey, false);
      const setObj = (keys.length > 1) ? get(preObj, keys.slice(1), false) : preObj;
      setObj[key] = val;

      rootObj[originalKey] = JSON.stringify(preObj);
    }
    else obj[key] = JSON.stringify(val);

    return true;
  }

}

export {
  getImageUrl,
  objProxy
}




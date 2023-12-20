function getObjKeys(data, targetValue) {
  // 使用 Object.keys() 獲取所有鍵
  const keys = Object.keys(data);

  // 使用 find() 方法找到符合條件的第一個鍵
  const foundKey = keys.find(key => data[key] === targetValue);

  return foundKey;
}

export default {
  getObjKeys
}

export const searchEntries = (id_client, array1, array2) => {
  const array = [];

  array1.forEach((obj1) => {
    array2.forEach((obj2) => {
      let obj = {};

      if (obj2.id_client === id_client && obj1.id === obj2.id_specialist) {
        obj = Object.assign(obj, obj1);
        obj.date = obj2.date;
        obj.time = obj2.time;
        obj.id = obj2.id;
        obj.id_client = obj2.id_client;
        array.push(obj);
      }
    });
  });
  return array;
};

export const searchClient = (id, array) => {
  const newArray = [];
  array.forEach((obj) => {
    if (obj.id_client === id || obj.id === id) {
      newArray.push(obj);
    }
  });
  return newArray;
};

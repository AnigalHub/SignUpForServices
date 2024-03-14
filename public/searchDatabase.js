export const searchEntries = (id_client, array1,array2) => {
  let array = []

  array1.forEach((obj1) => {
    array2.forEach((obj2) => {
      let obj = {};

      if (obj2['id_client'] === id_client && obj1['id'] === obj2['id_specialist']) {

        obj = Object.assign(obj, obj1);
        obj['date'] = obj2['date'];
        obj['time'] = obj2['time'];
        obj['id'] = obj2['id'];
        obj['id_client'] = obj2['id_client']
        array.push(obj)

      }
    })
  })
 return array;

}
export const searchClient = (id, array) => {
  let newArray = [];
  array.forEach((obj) => {
    console.log('obj', obj, id)
    if(obj['id_client'] === id || obj['id'] === id){
      console.log('OBJ', obj)
      newArray.push(obj);
    }
  })
  return newArray;
}




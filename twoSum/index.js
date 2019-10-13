
const findPair = (list, sum) => {
  let hashTable = [];
  let result = [];

  for(let index = 0; index < list.length; index++) {
    const hashValue = hashTable[list[index]];
    if(hashValue != null) {
      result = [index, hashValue];
      return result;
    }
    hashTable[sum - list[index]] = index;
  }
  return result;
}

console.log(findPair([10,20,10,40,50,60,70],50));
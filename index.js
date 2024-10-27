const getTargetPosition = (arr, target) => {
    let targetPositionArray = [];
    let numMap = new Map();
  
    for (let i = 0; i < arr.length; i++) {
      let complement = target - arr[i];
      if (numMap.has(complement)) {
        targetPositionArray.push(numMap.get(complement), i);
      }
      numMap.set(arr[i], i);
    }
  
    return targetPositionArray;
  }
  
  const arr = [7, 2, 4, 5];
  const target = 9;
  const result = getTargetPosition(arr, target);
  console.log(result); 
  
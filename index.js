const unorderedSet = [41, 57, 84, 19, 14, 70, 66, 28, 92, 55];


minim = (myArray)=>{
    const first = myArray.reduce((a, b) => a < b? a : b);
    const second = myArray.filter((i) => i != first)
                           .reduce((a, b) => a < b? a : b);
    return { first, second }
}

minimRemake = (arr) =>{
  const first = Math.min(...arr);
  const second = Math.min(...arr.filter((num) => first !== num))
  return {first, second}
}

minimReloaded = (myArray)=>{
    let first = myArray[0];
    let second = first;
    for(let i=0; i < myArray.length ; i++){
        if(myArray[i]  < first) first = myArray[i];
        
        if (i+1 < myArray.length 
            && myArray[i + 1] < second 
            && second > first) 
          second = myArray[i];
    }
    return { first, second }
}

console.log(minim(unorderedSet))

console.log(minimRemake(unorderedSet))

console.log(minimReloaded(unorderedSet))
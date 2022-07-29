//UNIT2
const indexesOfSubstringCharacters = (substring, sequence) => {
    let result = {};
    for (let i = 0; i < substring.length; i++) {
      for (let j = 0; j < sequence.length; j++) {
        if (substring[i] === sequence[j]) {
          result[j] = substring[i];
        }
      }
    }
    return result;
}

//UNIT3
const cutTheTails = (obj, substring) => {
    const entriesFromStart = Object.entries(obj);
    let entry = 0;
    
    while (entriesFromStart[entry][1] !== substring[0]) {
      delete obj[entriesFromStart[entry][0]];
      entry++;
    }
    
    const entriesFromEnd = Object.entries(obj).reverse()
    entry = 0;
    while (entriesFromEnd[entry][1] !== substring[substring.length - 1]) {
      delete obj[entriesFromEnd[entry][0]];
      entry++;
    }
    
}

//UNIT4
const sortBySubstringStructure = (obj, substring) => {
  const keys = Object.keys(obj);
  let resultArray = []
  for (let i = 0; i < substring.length; i++) {
    resultArray.push([]);
    for (let key of keys) {
      if (obj[key] === substring[i]) {
        resultArray[i].push([substring[i], key])
      }
    }
  }
  return resultArray;
}

//UNIT5
const allOccurances = (arr, str) => {
  let potentialResultCombos = [];
  for (let char of arr[0]) {
    potentialResultCombos.push([char]);
  }
  for (let arrIndex = 1; arrIndex < arr.length; arrIndex++) {
    newGen = [];
    for (char of arr[arrIndex]) {
      for (combo of potentialResultCombos) {
        //console.log(combo ,char, combo[combo.length - 1])
        if (Number(combo[combo.length - 1][1]) < Number(char[1])) {
          //console.log([...combo, char])
          newGen.push([...combo, char])
        }
      }
    }
    potentialResultCombos = newGen;
  }
  return potentialResultCombos;
}

//MAIN UNIT
const occurancesOfSubstring = (substring, sequence) => {

  //process string into object using UNIT2 and UNIT 3
  let relevantCharacters = indexesOfSubstringCharacters(substring, sequence);
  cutTheTails(relevantCharacters, substring);

  //represent object as 3D array using UNIT4
  let arrayOfSortedCharacters = sortBySubstringStructure(relevantCharacters, substring);
  
  //get result using UNIT5
  return allOccurances(arrayOfSortedCharacters, substring);
  
}
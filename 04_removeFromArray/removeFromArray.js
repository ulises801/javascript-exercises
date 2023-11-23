const removeFromArray = function(arrayOfNumbers, ...numberToRemove) {
    
        for(let i=0; i < numberToRemove.length; i++){
            for(let j = 0; j < arrayOfNumbers.length; j++){
                if (numberToRemove[i] === arrayOfNumbers[j]){
                    arrayOfNumbers.splice(j,1)
                }
            }
        }

        

    return arrayOfNumbers;
};

// Do not edit below this line
module.exports = removeFromArray;

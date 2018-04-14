function coding(array){
    let userInput = array.map(item => item.toLowerCase().replace(' ',''))
    let codedArray = []
    for (let i = 0; i < userInput.length; i++) {
        codedArray[i] = []
        for (let m = 0; m < userInput[i].length; m++) {
            codedArray[i][m] = mapping[userInput[i][m]]
        }
    }
    console.log(codedArray)
    return codedArray
}




// https://github.com/AlexandrNovikov/js_practice
var chocolates = [
    "green", "green", "green", "silver", "blue", "crimson", "purple", "red", "crimson", "purple",
    "purple", "green", "pink", "blue", "red", "silver", "crimson", "purple", "silver", "silver",
    "red", "green", "red", "silver", "pink", "crimson", "purple", "green", "red", "silver",
    "crimson", "pink", "silver", "blue", "pink", "crimson", "crimson", "crimson", "red", "purple",
    "purple", "green", "pink", "blue", "red", "crimson", "silver", "purple", "purple", "purple",
    "red", "purple", "red", "blue", "silver", "green", "crimson", "silver", "blue", "crimson",
    "purple", "green", "pink", "green", "red", "silver", "crimson", "blue", "green", "red",
    "red", "pink", "blue", "silver", "pink", "crimson", "purple", "green", "red", "blue",
    "red", "purple", "silver", "blue", "pink", "silver", "crimson", "silver", "blue", "purple",
    "purple", "green", "blue", "blue", "red", "red", "silver", "purple", "silver", "crimson"
];

//Progression 1: Add ___ chocolates of ____ color
function addChocolates(chocolates, color, count) {
    if (count <= 0) return 'Number cannot be zero/negative'
    for (let i = 0; i < count; i++) chocolates.unshift(color)
}

//Progression 2: Remove ___ chocolates from the top the dispenser
function removeChocolates(chocolates, number) {
    if (number > chocolates.length) return "Insufficient chocolates in the dispenser"
    else if (number < 0) return 'Number cannot be zero/negative'
    let chocoList = []
    for (let i = 0; i < number; i++) {
        chocoList.push(chocolates.shift())
    }
    return chocoList
}

//Progression 3: Dispense ___ chocolates
function dispenseChocolates(chocolates, number) {
    if (number > chocolates.length) return "Insufficient chocolates in the dispenser"
    else if (number < 0) return 'Number cannot be zero/negative'
    let chocoList = []
    for (let i = 0; i < number; i++) {
        chocoList.push(chocolates.pop())
    }
    return chocoList
}

//Progression 4: Dispense ___ chocolates of ____ color
function dispenseChocolatesOfColor(chocolates, number, color) {
    if (number > chocolates.length) return "Insufficient chocolates in the dispenser"
    else if (number < 0) return 'Number cannot be zero/negative'
    let chocoList = []
    for (let i = chocolates.length - 1; i >= 0; i--) {
        if (chocolates[i] == color) chocoList.push(chocolates.splice(i, 1).toString())
        if (chocoList.length == number) break
    }
    return chocoList
}

//Progression 5: Display ___ chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]
function noOfChocolates(chocolates) {

    // console.log(chocolates);
    let list = chocolates.reduce(function(prev, cur) {
        prev[cur] = (prev[cur] || 0) + 1;
        return prev;
    }, {});

    // console.log(Object.values(list));
    return Object.values(list)
}

//Progression 6: Sort chocolates based on count in each color. Return array of colors
function sortChocolateBasedOnCount(chocolates) {
    // console.log(chocolates.sort((a, b) => a - b));
    let list = chocolates.reduce(function(prev, cur) {
        prev[cur] = (prev[cur] || 0) + 1;
        return prev;
    }, {});
    // console.log(Object.values(list).sort((a, b) => b - a));
    // console.log(Object.values(list).sort((a, b) => b - a));
    // console.log(Object.entries(list).sort((a, b) => b[0].localeCompare(a[0])));
    let obj = Object.entries(list).sort((a, b) => b[0].localeCompare(a[0]))
        // console.log(obj.map(i => i[0]));
    let finalArray = []
    for (let [key, value] of obj) {
        for (let i = 0; i < value; i++)
            finalArray.push(key)
    }
    // console.log(finalArray);
    // return chocolates.sort((a, b) => a - b)
    return obj.map(i => i[0])
}

//Progression 7: Change ___ chocolates of ____ color to ____ color
function changeChocolateColor(chocolates, number, color, finalColor) {
    if (chocolates.length == 0) return []
    if (number <= 0) return 'Number cannot be zero/negative'
    if (color == finalColor) return 'Can\'t replace the same chocolates'
    let index;
    for (let i = 0; i < number; i++) {
        index = chocolates.indexOf(color)
        chocolates.splice(index, 1, finalColor)
    }
    return chocolates
}

//Progression 8: Change all chocolates of ____ color to ____ color and return [countOfChangedColor, chocolates]
function changeChocolateColorAllOfxCount(chocolates, color, finalColor) {
    if (chocolates.length == 0) return [0, []]
    if (color == finalColor) return 'Can\'t replace the same chocolates'
    if (chocolates.length == 1) {
        chocolates.pop();
        chocolates.push(finalColor);
        return [1, chocolates]
    }
    let index;
    let count;
    for (let i = 0; i < chocolates.length - 1; i++) {
        index = chocolates.indexOf(color)
        if (index == -1) break
        chocolates.splice(index, 1, finalColor)
    }
    index = 0;
    count = 0;
    for (let i = 0; i < chocolates.length - 1; i++) {
        index = chocolates.indexOf(finalColor, index)
        if (index == -1) break
        count++;
        index++;
    }
    console.log(chocolates);
    console.log(count);
    return [count, chocolates]
}

//Challenge 1: Remove one chocolate of ____ color from the top


//Challenge 2: Dispense 1 rainbow colored colored chocolate for every 3 chocolates of the same color dispensed
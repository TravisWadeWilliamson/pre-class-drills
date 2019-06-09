/***********************************/
// Sort the Nums
/***********************************/

//1. remove the duplicate nums
//2. sort the nums in ascending order
//3. sort the nums in descending order


//input: an array with integers, some of which might be duplicated [2,3,1,2,2,4,2]
//output [1,2,3,4] an array of unique integers sorted in ascending order
//output [4,3,2,1] an array of unique integers sorted in descending order

const myArr = [2, 1, 300, 2, 2, 3, 33 ,100, 101, 104, 4, 4, 5];

const noDupesArr = [];
const removeDupes = (array) => {
    for (let i = 0; i < array.length; i++) {
        // console.log(noDupesArr)
        // console.log(noDupesArr.includes(array[i]))
        if (noDupesArr.includes(array[i]) === false) {
            noDupesArr.push(array[i])
        }
    } return noDupesArr
}


const sortAscending = () => {
    noDupesArr.sort(function(a,b){return a-b})
    console.log(noDupesArr)
}

const sortDescending = () => {
    noDupesArr.sort(function(a,b) {return b-a})
    console.log(noDupesArr)
}


console.log(removeDupes(myArr))
sortAscending(noDupesArr)
sortDescending(noDupesArr)
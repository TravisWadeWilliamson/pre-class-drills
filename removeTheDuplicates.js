/***********************************/
// Remove the Duplicates
/***********************************/

//input: an array with integers, some of which might be duplicated [1,2,2,2]
//output [1,2,3] an array of unique integers

const myArr = [2, 1, 2, 2, 3, 33 ,100, 101, 104, 4, 4, 5];

const removeDupes = (array) => {
    const noDupesArr = [];
    for (let i = 0; i < array.length; i++) {
        // console.log(noDupesArr)
        // console.log(noDupesArr.includes(array[i]))
        if (noDupesArr.includes(array[i]) === false) {
            noDupesArr.push(array[i])
        }
    } return noDupesArr
}
console.log(removeDupes(myArr))


// var myArr = [1,2,2,3];

// var removeDupes = function(array){
//     var newArray = [];

//     for(var i=0 ; i < array.length; i++){
//         // console.log(array[i])
//         console.log(newArray.includes( array[i] ) )

//         if( newArray.includes( array[i] ) == false ){
//             newArray.push( array[i] )
//         }

//     }

//     return newArray;
// }

// console.log(removeDupes(myArr))
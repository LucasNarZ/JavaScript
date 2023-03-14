const myReverse = (arr) => {
    let newArr = [];
    for(let i of arr){
        newArr.unshift(i)
    }
    return newArr
}
console.log(myReverse([3, 5, 6, 8, 0]))
function reverseNum(num) {
    const reverse =Number(num.toString().split('').reverse().join(''))

    return reverse
}
const num=5121
console.log(reverseNum(num));


// ------------------2----------------
function getBudgets(people){
    let total =0
    for(let i=0 ;i<people.length;i++){
        total+=people[i].budget
    }
    return total
}
console.log(getBudgets([
    {name:"John",age:21,budget:23000},
    {name:"Steve",age:32,budget:40000}

]));
// -----------------3----------------
function reverseNums(num3) {
    const reverse2 =`${Number(num3.toString().split('').reverse().join(''))}${num3}`

    return reverse2
}
const num2=123
console.log(reverseNums(num2));

// -----------------------4----------------

function check(arr) {
    return `${arr[1]}${arr[2]}${arr[3]}` === arr[4];
  }
  
  const test = ['rsq','6hi','g','rsq6hig'];
  console.log(check(test));
// -----------5-----------
function remove(arr){
    return [...new Set(arr)]
}
const cros=[1,0,1,0]
console.log(remove(cros));
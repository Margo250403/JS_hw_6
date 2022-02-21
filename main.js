function exponentiate(arr, pow) 
{
    var newArr =[];
    for(var number of arr){
        newArr.push(number ** pow);
    }
     return newArr;
}
var res = exponentiate([2, 4, 3, 1], 2);

console.log(res);



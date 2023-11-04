console.log("This is a module");
function average(arr){
    sum = 0
    arr.forEach(element=>{
        sum+=element;
    })
    return sum/arr.length;
}
function sum(arr){
    sum = 0;
    arr.forEach((element)=>{
        sum+=element;
    })
    return sum;
}
// module.exports = average;

module.exports = {
    avg:average,
    sum:sum,
    myName: "sadiq"
}
module.exports.nodeJs= 20.9;
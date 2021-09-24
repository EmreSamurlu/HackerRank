let arr = [-4, 5, 6, 0, 7, -2]
//in the real solution function param is arr !
function plusMinus() {
    // Write your code here
    let plus = arr.filter(num => num > 0).length/arr.length;
    let minus = arr.filter(num => num < 0).length/arr.length;
    let zero = arr.filter(num => num == 0).length/arr.length;
    
    return console.log(plus.toFixed(6)+ "\n" + minus.toFixed(6)+"\n"+ zero.toFixed(6))
}
plusMinus();

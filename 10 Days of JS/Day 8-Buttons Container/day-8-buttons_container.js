let clickBtn = document.getElementById("btn5");

// numaraların doğru dönmesi için array bu şekilde düzenlendi !!
let numArr = [1,2,3,6,9,8,7,4];

clickBtn.onclick= () => {
    numArr.unshift(numArr.pop());
    document.getElementById("btn1").innerHTML = numArr[0];
    document.getElementById("btn2").innerHTML = numArr[1];
    document.getElementById("btn3").innerHTML = numArr[2];
    document.getElementById("btn6").innerHTML = numArr[3];
    document.getElementById("btn9").innerHTML = numArr[4];
    document.getElementById("btn8").innerHTML = numArr[5];
    document.getElementById("btn7").innerHTML = numArr[6];
    document.getElementById("btn4").innerHTML = numArr[7];
}

function bonAppetit(bill, k, b) {
    // Write your code here
    const sum = bill.reduce((x, y) => x + y, 0);
    const pay = (sum - bill[k]) / 2;
    (b - pay === 0) ? console.log("Bon Appetit") : console.log(b - pay)
}

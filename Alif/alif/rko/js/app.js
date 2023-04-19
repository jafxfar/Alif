const sum=1000;
const rt=11.40;
function calculateCommission(amount, rate) {
    const percent = 0.2;
    const minComission = 250;
    const maxComission = 450;
    const comission = (amount * rate * percent / 100);
    if (comission < minComission) {
        return minComission;
    } else if (comission > maxComission) {
        return maxComission;
    } else {
        return comission;
    }
}
const result = calculateCommission(sum, rt);
console.log(result);

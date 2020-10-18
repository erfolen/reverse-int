module.exports = function reversed (n) {
    let a = Math.abs(n).toString().split('').reverse().join('');
    return Number(a);  
}

function add(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}
module.exports = { AddFun : add, SubFun : sub }; // export all function directly.... via object,also rename function name

//2nd way... direct export one by one..

// exports.Mul = (a,b) => a * b;
// exports.Div = (a,b) => a / b;
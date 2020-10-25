module.exports = function reverse (n) {
  let str = Math.abs(n).toString();
  let str_reversed = '';
  for(let i = str.length - 1; i >= 0; i--){
    str_reversed += str[i];
  }
  return +str_reversed;
}


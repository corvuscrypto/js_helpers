function leftPad(str, n){
  try {
    return arguments[2].repeat(n)+str;
  } catch(e) {
    return ' '.repeat(n)+str;
  }
}

function reverse(str){
  var strArray = str.split('');
  var len = array.length;
  var l = 0;
  var r = 0;
  var temp = '';
  for (l = 0; l < len/2; l++) {
      r = len-l-1;
      temp = strArray[l];
      strArray[l] = strArray[r];
      strArray[r] = temp;
  }
  return strArray.join('')
}

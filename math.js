
//more efficient for larger arrays
function sum(a){
  var len = a.length;
  var sum = 0;
  var l = 0;
  var r = 0;
  for (l;l < len/2-0.5; l++){
    r = len-l-1;
    sum += a[l]+a[r];
  }
  if (len&1){
    sum += a[l]
  }
  return sum;
}

//use for tiny arrays
function sum(a){
  var sum = 0;
  for (var i = 0;i < a.length; i++){
    sum += a[i];
  }
  return sum;
}

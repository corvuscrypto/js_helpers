function isNegative(n){
  return n<0;
}

function isPositive(n){
  return n>0;
}

function isZero(n){
  return n===0;
}

function intOrZero(n){
  var int = parseInt(n)
  if (typeof int !== 'number'||isNaN(int)) return 0;
  return int;
}

function intOrDefault(n, d){
  var int = parseInt(n)
  if (typeof int !== 'number'||isNaN(int)) return d;
  return int;
}

//Write a JavaScript function to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.

function areaOfTriangle(a, b, c) {
  var s = (a + b + c) / 2;
  var area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  return area;
}

console.log(areaOfTriangle(5,6,7));

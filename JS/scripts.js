function tracker() {
  var x = parseInt(document.getElementById("one").value);
  var y = parseInt(document.getElementById("two").value);
  var z = parseInt(document.getElementById("three").value);
  var triangles = [x, y, z];


  if (triangles[0] + triangles[1] <= triangles[2] || triangles[0] + triangles[2] <= triangles[1] || triangles[1] + triangles[2] <= triangles[0]) {
    document.getElementById("response").innerHTML = "cannot form a triangle using those values";
  } else if (triangles[0] === triangles[1] && triangles[1] === triangles[2] && triangles[0] === triangles[2]) {

    document.getElementById("response").innerHTML = "Equilateral triangle.";

  } else if (triangles[0] === triangles[1] || triangles[0] === triangles[2] || triangles[1] === triangles[2]) {
    document.getElementById("response").innerHTML = "Isosceles triangle.";
  } else if (triangles[0] + triangles[1] > triangles[2] || triangles[1] + triangles[2] > triangles[0] || triangles[0] + triangles[2] > triangles[1]) {
    document.getElementById("response").innerHTML = "Scalene triangle.";
  } else {
    response.innerHTML = 'not a triangle';
  }
}

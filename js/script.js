let row = "";

function generate() {
  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;
  let course = document.getElementById("course").value;

  let add = document.getElementById("add").value;

  if (!name || !age || !course) {
    alert("Please make sure you fill all fields!");
    return;
  }

  let displayTable = document.getElementById("displayTable");

  let newRow = displayTable.insertRow(row);

  let cell1 = newRow.insertCell(0);
  let cell2 = newRow.insertCell(1);
  let cell3 = newRow.insertCell(2);
  let cell4 = newRow.insertCell(3);

  cell1.innerHTML = name;
  cell2.innerHTML = age;
  cell3.innerHTML = course;

  let deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "Delete";
  deleteBtn.onclick = function () {
    deleteRow(this);
  };
  cell4.appendChild(deleteBtn);

  name = document.getElementById("name").value = "";
  age = document.getElementById("age").value = "";
  course = document.getElementById("course").value = "";
}

row++;

function deleteRow(button) {
  // Find the row of the button and delete it
  let row = button.parentNode.parentNode;
  row.parentNode.removeChild(row);
}

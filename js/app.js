let d = new Date();
let date = d.getDate();
let row = document.getElementsByClassName(date);
row.item(0).style.backgroundColor = "rgb(44, 44, 44)";
row.item(0).style.fontWeight = "bold";
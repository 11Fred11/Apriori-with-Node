var csv = require("fast-csv");
var fs = require("fs");

var obj = JSON.parse(fs.readFileSync("ResFalse.json", "utf8"));
var newArr = [];
obj.forEach(element => {
  if (
    element.rhs.length == 1 &&
    (element.rhs == "Alive" || element.rhs == "Dead")
  )
    newArr.push(element);
});

fs.writeFileSync("filtred.json", JSON.stringify(newArr));

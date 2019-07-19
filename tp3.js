var csv = require("fast-csv");
var fs = require("fs");
var util = require("./util");
console.time("Benchmark");
// ********************************* 1) - PREPARING DATA ********************************
var df = [];
var stream = fs.createReadStream("./titanic.csv");
csv
  .fromStream(stream, { headers: true })
  .on("data", function(row) {
    df.push(row);
  })
  .on("end", function(len) {
    let { moyFare, countAgeNan, newDf } = util.magic(df);

    console.log("\x1b[32m", "Number of records in CSV : " + len);
    console.log("\x1b[36m", "Average Fare is : " + moyFare.toFixed(3));
    console.log(
      "\x1b[43m",
      "\x1b[30m",
      "Number of records with Age isNaN : " + countAgeNan
    );
    console.log("\x1b[0m", "-------------------------------------------");

    newDf.forEach(function(person) {
      delete person.Ticket;
      delete person.Cabin;
      let valFare = parseFloat(person.Fare);
      person.Fare = util.updateFare(valFare);
      let valAge = parseFloat(person.Age);
      person.Age = util.updateAge(valAge);
    });
    //console.table(newDf);
    // ********************************* 2) - EXPORTING DATA ********************************

    if (!fs.existsSync("./dataset.csv")) {
      var ws = fs.createWriteStream("dataset.csv");
      csv
        .write(newDf, {
          headers: false
        })
        .pipe(ws);
    } else console.log("no new dataset created :)");

    util.algoApriori("dataset.csv", 0.06, 0.75, false, 100);
  });

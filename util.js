var Apriori = require("apriori");

let rand = () => {
  randomAge = ["Miner", "Young", "Adult", "Senior"];
  r = randomAge[Math.floor(Math.random() * randomAge.length)];
  return r;
};

let magic = df => {
  let newDf = df;
  let nb = 0;
  let moyFare = 0; // moy Fare
  let countAgeNan = 0; // number of rows with the "Age" field is NaN.
  for (let i = 0; i < newDf.length; i++) {
    if (newDf[i].Age == "") {
      countAgeNan++;
    }
    if (newDf[i].Fare != "") {
      nb++;
      moyFare += parseFloat(newDf[i].Fare);
    }
    if (newDf[i].Survie == "0") {
      newDf[i].Survie = "Dead";
    }
    if (newDf[i].Survie == "1") {
      newDf[i].Survie = "Alive";
    }
    if (newDf[i].Chclasse == "1") {
      newDf[i].Chclasse = "First_Class";
    }
    if (newDf[i].Chclasse == "2") {
      newDf[i].Chclasse = "Second_Class";
    }
    if (newDf[i].Chclasse == "3") {
      newDf[i].Chclasse = "Third_Class";
    }
    if (newDf[i].Parch != "0") {
      newDf[i].Parch = "With_Family";
    }
    if (newDf[i].Parch == "0") {
      newDf[i].Parch = "Alone";
    }
    if (newDf[i].Sibsp != "0") {
      newDf[i].Sibsp = "Group";
    }
    if (newDf[i].Sibsp == "0") {
      newDf[i].Sibsp = "Single";
    }
  }
  moyFare = moyFare / nb;
  return {
    moyFare,
    countAgeNan,
    newDf
  };
};

let myAffect = moyFare => {
  if (moyFare < 100) {
    return "Low";
  } else if (moyFare < 350) {
    return "Average";
  } else return "High";
};

let updateFare = (valFare, moyFare) => {
  switch (true) {
    case isNaN(valFare):
      return moyFare;
    case valFare < 100:
      return "Low";
    case valFare < 350:
      return "Average";
    case valFare > 350:
      return "High";
  }
};

let updateAge = valAge => {
  switch (true) {
    case isNaN(valAge):
      return rand();
    case valAge < 18:
      return "Miner";
    case valAge < 35:
      return "Young";
    case valAge < 60:
      return "Adult";
    case valAge >= 60:
      return "Senior";
  }
};

let algoApriori = (dataset, minSupport, minConfidence, debugMode, max) => {
  new Apriori.Algorithm(
    minSupport,
    minConfidence,
    debugMode,
    max
  ).showAnalysisResultFromFile(dataset);
};

module.exports.rand = rand;
module.exports.magic = magic;
module.exports.moyAffect = myAffect;
module.exports.updateFare = updateFare;
module.exports.updateAge = updateAge;
module.exports.algoApriori = algoApriori;

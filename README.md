# APRIORI WITH NODE.JS ! 👌🔥

KDD homework consists of cleaning and preparing the Titanic.csv 🚢 data-set then extracting Association Rules using the **Apriori algorithm** and interpreting the results.

## 😒 Why using JavaScript for KDD :

**Simple** :
it's possible to write ML algorithms in just about **any language**.
Most people just don't care to learn the fundamentals strongly enough that they can write an algorithm from scratch.Instead, they rely on **Python libraries** 🐍 to do the work for them, and end up not truly grasping what's happening inside the black box ⬛️. Other people only know ML academically, using **Octave** or **Matlab**.
I intended to try this homework in Python, but decided to stick with JavaScript for the following reasons:

- I am learning the **MERN** stack ✨ which heavily focuses on JavaScript, and since we are currently working with a handful of programming languages simultaneously at school 😵, I found this approach nonproductive and I wanted to narrow my options as much as I could.

- I wanted to make this homework a little more challenging so I can benefit from the course while also trying to solve problems on my own in **JS** which will help me get better at it 💪.

## 📚 KDD Process :

<p align="center">
  <img  src="https://raw.githubusercontent.com/10Fred10/Apriori-with-Node/master/readme-assets/KDD-process.png">
</p>
To simplify this process we will have 3 main milestones :

- 📈 **Data** : Titanic.csv
- 📉 **Transformed Data** : we deleted the `Ticket` and `Cabin` fields,
  Updated the `Age` and `Fare` to a new format to finally get the new `Dataset.csv` file.

  <p align="center">
    <img  src="https://raw.githubusercontent.com/10Fred10/Apriori-with-Node/master/readme-assets/clean-data.png">
  </p>

- 📊 **Patterns** : After applying the Apriori algorithm we got the Association rules in `ResFalse.Json`.
  <p align="center">
    <img  src="https://raw.githubusercontent.com/10Fred10/Apriori-with-Node/master/readme-assets/association-rules.png">
  </p>

## 🔬 Interpretation :

We will try and vary **Support** and **Confidence** variables to see what effect they have on the number of resulted **Association Rules**.

<p align="center">
<b>Graph A - Support : 0.5 | Confidence (0.1 to 0.9)</b>
  <img  src="https://raw.githubusercontent.com/10Fred10/Apriori-with-Node/master/readme-assets/Graph-A.png">
</p>

<p align="center">
<b>Graph B - Support : (0.1 to 0.9) | Confidence : 0.9</b>
  <img  src="https://raw.githubusercontent.com/10Fred10/Apriori-with-Node/master/readme-assets/Graph-B.png">
</p>

💡 **Conclusion :**
As expected, the effect of **rising** one of the two parameters whether it’s the support or the confidence
(or both) will **decrease the number of resulted rules.** ⬇️
Though we can notice that the curve in **Graph A** decreased dramatically at the last two spots (0.8 and 0.90.9) contrary to the smooth declining of the **Graph B’s** curve.

## 💭 Final thoughts

I am surprised 😲 with how easy and fast it is to work with `csv` files with **Nodejs**, I also admired the native methods and functions provided 👍, for instance, after trying multiple third-party libraries to display my `df` array as a table, I stumbled across a native **Node.js** method `console.table( )` which was perfect for my use case 💎.

I am definitely going to keep experimenting project ideas with **Node.Js** in the future 🤘.

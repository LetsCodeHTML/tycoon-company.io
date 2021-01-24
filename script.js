var money = 100;
var pps = 0;

document.getElementById("money").innerHTML = money;
document.getElementById("pps").innerHTML = pps;

var workerCost = 100;
var smallFactoryCost = 1000;
var factoryCost = 10000;
var megaFactoryCost = 100000;
var superFactoryCost = 1000000;

document.getElementById("workercost").innerHTML = workerCost;
document.getElementById("smallfactorycost").innerHTML = smallFactoryCost;
document.getElementById("factorycost").innerHTML = factoryCost;
document.getElementById("megafactorycost").innerHTML = megaFactoryCost;
document.getElementById("superfactorycost").innerHTML = superFactoryCost;

function worker() {
 if (money >= workerCost) {
  money -= workerCost;
  pps += 10;
  var wcIncreaser = workerCost / 10;
  workerCost += Math.round(wcIncreaser);
  document.getElementById("money").innerHTML = money;
  document.getElementById("pps").innerHTML = pps;
  document.getElementById("workercost").innerHTML = workerCost;
 } else {alert("You need £" + (workerCost - money) + " more");}
}

function smallFactory() {
 if (money >= smallFactoryCost) {
  money -= smallFactoryCost;
  pps += 100;
  var sfcIncreaser = smallFactoryCost / 10;
  smallFactoryCost += Math.round(sfcIncreaser);
  document.getElementById("money").innerHTML = money;
  document.getElementById("pps").innerHTML = pps;
  document.getElementById("smallfactorycost").innerHTML = smallFactoryCost;
 } else {alert("You need £" + (smallFactoryCost - money) + " more");}
}

function factory() {
 if (money >= factoryCost) {
  money -= factoryCost;
  pps += 1000;
  var fcIncreaser = factoryCost / 10;
  factoryCost += Math.round(fcIncreaser);
  document.getElementById("money").innerHTML = money;
  document.getElementById("pps").innerHTML = pps;
  document.getElementById("factorycost").innerHTML = factoryCost;
 } else {alert("You need £" + (factoryCost - money) + " more");}
}

function megaFactory() {
 if (money >= megaFactoryCost) {
  money -= megaFactoryCost;
  pps += 10000;
  var mfcIncreaser = megaFactoryCost / 10;
  megaFactoryCost += Math.round(mfcIncreaser);
  document.getElementById("money").innerHTML = money;
  document.getElementById("pps").innerHTML = pps;
  document.getElementById("megafactorycost").innerHTML = megaFactoryCost;
 } else {alert("You need £" + (megaFactoryCost - money) + " more");}
}
 
function superFactory() {
 if (money >= superFactoryCost) {
  money -= superFactoryCost;
  pps += 100000;
  var sufcIncreaser = superFactoryCost / 10;
  superFactoryCost += Math.round(sufcIncreaser);
  document.getElementById("money").innerHTML = money;
  document.getElementById("pps").innerHTML = pps;
  document.getElementById("superfactorycost").innerHTML = superFactoryCost;
 } else {alert("You need £" + (superFactoryCost - money) + " more");}
}

setInterval(function(){
 money += pps;
 document.getElementById("money").innerHTML = money;
}, 1000);

function save() {
 localStorage.setItem("money", money);
 localStorage.setItem("profit per second", pps);
 localStorage.setItem("worker cost", workerCost);
 localStorage.setItem("small factory cost", smallFactoryCost);
 localStorage.setItem("factory cost", factoryCost);
 localStorage.setItem("mega factory cost", megaFactoryCost);
 localStorage.setItem("super factory cost", superFactoryCost)
}

function load() {
 money = parseInt(localStorage.getItem("money"));
 pps = parseInt(localStorage.getItem("profit per second"));
 workerCost = parseInt(localStorage.getItem("worker cost"));
 smallFactoryCost = parseInt(localStorage.getItem("small factory cost"));
 factoryCost = parseInt(localStorage.getItem("factory cost"));
 megaFactoryCost = parseInt(localStorage.getItem("mega factory cost"));
 superFactoryCost = parseInt(localStorage.getItem("super factory cost"))

 document.getElementById("money").innerHTML = money;
 document.getElementById("pps").innerHTML = pps;
 document.getElementById("workercost").innerHTML = workerCost;
 document.getElementById("smallfactorycost").innerHTML = smallFactoryCost;
 document.getElementById("factorycost").innerHTML = factoryCost;
 document.getElementById("megafactorycost").innerHTML = megaFactoryCost;
 document.getElementById("superfactorycost").innerHTML = superFactoryCost;
}
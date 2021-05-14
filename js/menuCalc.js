//Menu Table
// Calculation of the total - Then separeted by Starters, Main, Desserts and Drinks

var total_items = 13;

function CalculateItemsValue() {
  var total = 0;
  var totalStarters = 0;
  var totalMain = 0;
  var totalDesserts = 0;
  var totalDrinks = 0;

  for (let i = 1; i <= total_items; i++) {
    itemID = document.getElementById("qtt" + i);
    total = total + itemID.value * itemID.getAttribute("data-price");
  }
  document.getElementById("Total").innerHTML = "€" + total.toFixed(2);
  document.getElementById("TotalClient").innerHTML = "€" + total.toFixed(2);

  // Total Starters
  for (let i = 1; i <= 4; i++) {
    if (i != 2) {
      itemID = document.getElementById("qtt" + i);
      totalStarters = totalStarters + itemID.value * itemID.getAttribute("data-price");
    }
  }

  document.getElementById("totalStarters").innerHTML = "€" + totalStarters.toFixed(2);

  // Total Main Course
  for (let i = 2; i <= 7; i++) {
    if (i != 3 && i != 4) {
      itemID = document.getElementById("qtt" + i);
      totalMain = totalMain + itemID.value * itemID.getAttribute("data-price");
    }
  }

  document.getElementById("totalMain").innerHTML = "€" + totalMain.toFixed(2);

  // Total Desserts
  for (let i = 8; i <= 10; i++) {
    itemID = document.getElementById("qtt" + i);
    totalDesserts = totalDesserts + itemID.value * itemID.getAttribute("data-price");
  }
  document.getElementById("totalDesserts").innerHTML = "€" + totalDesserts.toFixed(2);

  // Total Drinks
  for (let i = 11; i <= 13; i++) {
    itemID = document.getElementById("qtt" + i);
    totalDrinks = totalDrinks + itemID.value * itemID.getAttribute("data-price");
  }
  document.getElementById("totalDrinks").innerHTML = "€" + totalDrinks.toFixed(2);
}

document.querySelectorAll('[id^="qtt"]').forEach((item) => {
  item.addEventListener("change", CalculateItemsValue);
});



//Calculates Vegetarian

function CalculateVegetarian() {
  var totalVeg = 0;

  itemID1 = document.getElementById("qtt1");
  itemID2 = document.getElementById("qtt2");
  totalVeg =
    totalVeg +
    itemID1.value * itemID1.getAttribute("data-price") +
    itemID2.value * itemID2.getAttribute("data-price");

  document.getElementById("vegetarian").innerHTML = "€" + totalVeg.toFixed(2);
}

document.querySelectorAll('[id^="qtt"]').forEach((item) => {
  item.addEventListener("change", CalculateVegetarian);
});

//Calculates Non-Vegetarian

function CalculateNonVeg() {
  var totalNonVeg = 0;

  for (let i = 3; i <= 7; i++) {
    itemID = document.getElementById("qtt" + i);
    totalNonVeg =
      totalNonVeg + itemID.value * itemID.getAttribute("data-price");
  }
  document.getElementById("non-vegetarian").innerHTML =
    "€" + totalNonVeg.toFixed(2);
}

document.querySelectorAll('[id^="qtt"]').forEach((item) => {
  item.addEventListener("change", CalculateNonVeg);
});

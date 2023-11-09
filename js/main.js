// Dish images darken on hover
const dishes = document.querySelectorAll(".dish-wrapper");

dishes.forEach((dish) => {
  dish.addEventListener("mouseenter", () => {
    dish.childNodes[1].classList.add("img-darken");
  });
  dish.addEventListener("mouseleave", () => {
    dish.childNodes[1].classList.remove("img-darken");
  });
});

//Get Btn And Create Function
document.getElementById("myBtn").addEventListener("click", getData);

function getData() {
  //Get API for random customers display
  fetch("https://randomuser.me/api/?results=5&nat=br,ie")
    .then((res) => res.json())
    .then((data) => {
      let author = data.results;

      //Get Data Value
      let output = "";

      //Data Loop Through
      author.forEach(function (lists) {
        output += `
                
                        <img src="${lists.picture.medium}" class="img-customer">
                        <ul class="list-customers">
                            <li class="list-customer-name">Name: ${lists.name.first}</li>
                            <li class="list-customer-city">City: ${lists.location.city}</li>
                            <li class="list-customer-country">Country: ${lists.location.country}</li>
                            <li class="list-customer-email"> ${lists.email}</li>

                        </ul>
                   
                `;
      });

      //Show  All Data On Screen
      document.getElementById("output").innerHTML = output;
    });
}

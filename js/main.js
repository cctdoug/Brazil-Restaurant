// Dish images darken on hover
// I got this idea from a mini course I did at Udemy
const dishes = document.querySelectorAll(".dish-wrapper");

dishes.forEach((dish) => {
  dish.addEventListener("mouseover", () => {
    dish.childNodes[1].classList.add("img-darken");
  });
  dish.addEventListener("mouseout", () => {
    dish.childNodes[1].classList.remove("img-darken");
  });
});

//Get Btn And Create Function
document.getElementById("myBtn").addEventListener("click", getData);

function getData() {
  //Get API
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

      //Show On Screen All Data
      document.getElementById("output").innerHTML = output;
    });
}

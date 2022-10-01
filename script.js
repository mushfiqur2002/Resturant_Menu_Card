const menusItem = [
    {id:0001,
    img:"photos/breakfast01.jpg",
    foodname:"english food",
    price:60,
    fooddescription:"english food Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    category:"breakfast"},
         
         {id:0002,
    img:"photos/lunch01.jpg",
    foodname:"bangladeshi food",
    price:20,
    fooddescription:"rice and fish Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    category:"breakfast"},
         
         {id:0003,
    img:"photos/lunch03.jpeg",
    foodname:"combo lunch",
    price:70,
    fooddescription:"combo lunch with delicious many item Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    category:"lunch"},
         
         {id:0004,
    img:"photos/dinner01.jpg",
    foodname:"combo dinner",
    price:80,
    fooddescription:"dinner Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    category:"dinner"},
         
         {id:0005,
    img:"photos/dinner03.jpg",
    foodname:"light dinner",
    price:60,
    fooddescription:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    category:"noodles"},
         
         {id:0006,
    img:"photos/breakfast03.jpg",
    foodname:"porotta thala",
    price:60,
    fooddescription:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    category:"breakfast"},
         
         {id:0007,
    img:"photos/shakes01.jpg",
    foodname:"chocolate milkshake",
    price:100,
    fooddescription:"chocolate milkshake Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    category:"shake"},
         
         {id:00000,
    img:"photos/lunch02.jpg",
    foodname:"pasta",
    price:60,
    fooddescription:"pasta Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    category:"lunch"},
         
         {id:00000,
    img:"photos/dinner04.jpg",
    foodname:"biriyani",
    price:80,
    fooddescription:"biriyani Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    category:"dinner"},
         
         {id:0010,
    img:"photos/shakes03.png",
    foodname:"strawberries milkshake",
    price:20,
    fooddescription:"strawberries milkshake Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    category:"shake"},
         
         {id:00011,
    img:"photos/breakfast04.jpg",
    foodname:"porota with catni",
    price:40,
    fooddescription:"porota with catni Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    category:"breakfast"},
         
         {id:0012,
    img:"photos/breakfast02.jpg",
    foodname:"pan cake",
    price:60,
    fooddescription:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    category:"breakfast"},
         
         {id:0013,
    img:"photos/lunch04.jpeg",
    foodname:"fish and chicken",
    price:90,
    fooddescription:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    category:"lunch"},
         
         {id:0014,
    img:"photos/shakes02.jpg",
    foodname:" small chocolate milkshake",
    price:15,
    fooddescription:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    category:"shake"},
         
         {id:00015,
    img:"photos/dinner02.jpg",
    foodname:"kabba",
    price:49,
    fooddescription:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    category:"dinner"},
         
         {id:0016,
    img:"photos/lunch05.jpg",
    foodname:"combo lunch",
    price:60,
    fooddescription:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    category:"lunch"},
         
         {id:0017,
    img:"photos/shakes04.jpg",
    foodname:"combo dal vat",
    price:30,
    fooddescription:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    category:"lunch"},
         
         {id:0010,
    img:"photos/lunch01.jpg",
    foodname:"combo dal vat",
    price:950,
    fooddescription:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    category:"lunch"}
];
const foodImage = document.getElementById("foodImage");
const foodName = document.getElementById("foodName");
const priceAmount = document.getElementById("priceAmount");
const descriprion = document.getElementById("descriprion");

const container = document.querySelector(".foodItemContainer");
const foodList = document.querySelectorAll("li")

// ### EVENT LISTENER ### \\
window.addEventListener("DOMContentLoaded", function(){
    showPerson(menusItem);
});

foodList.forEach(function(item){
    item.addEventListener("click", function(){
        foodList.forEach(function(e){
            if(e.className !== item.className){
                e.classList.remove("active");
            }
        })
        item.classList.add("active");

        const listCategory = item.dataset.id;
        const menuCategory = menusItem.filter(function(e){
            if(e.category === listCategory){
                return e;
            }
        })
        if(listCategory === "all"){
            showPerson(menusItem);
        }else{
            showPerson(menuCategory);
        }
    })
})

// ### FUNCTION ### \\
function showPerson(menus){
    let displayMenu = menus.map(function(item){
        return `<div class="item">
                    <div class="image">
                        <img src="${item.img}" id="foodImage">
                    </div>
                    <div class="title">
                        <div class="foodName" id="foodName">${item.foodname}</div>
                        <div class="price"><span class="amount" id="priceAmount">${item.price}</span>$</div>
                    </div>
                    <div class="description">
                        <p class="descriptionText" id="descriprion">${item.fooddescription}</p>
                    </div>
                </div>`
    })
    let displayElemnt = displayMenu.join("");
    container.innerHTML = displayElemnt;
}
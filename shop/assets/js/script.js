let tabs = [
    {
        
        id:"all",
        brand:"Все машины",
        class:"active"
    },
    {
        
        id:"audi",
        brand:"Audi",
        class:""
    },
    {
        id:"bmw",
        brand:"BMW",
        class:""
    },
    {
        id:"hyundai",
        brand:"Hyundai",
        class:""
    },
    {
        id:"kia",
        brand:"KIA",
        class:""
    },
    {
        id:"land-rover",
        brand:"Land Rover",
        class:""
    },
    {
        id:"mercedes",
        brand:"Mercedes",
        class:""
    },
    {
        id:"nissan",
        brand:"Nissan",
        class:""
    },
    {
        id:"toyota",
        brand:"Toyota",
        class:""
    },
];
let cars = [
    {
        id:"car1",
        brand_id: "audi",
        image: "/assets/images/cars/Twitter post - 1.png",
        title: "AUDI A4 RS",
        price: "20 000"
    },
    {
        id:"car2",
        brand_id: "bmw",
        image: "/assets/images/cars/Twitter post - 2.png",
        title: "BMW X6",
        price: "40 000"
    },
    {
        id:"car3",
        brand_id: "hyundai",
        image: "/assets/images/cars/Twitter post - 3.png",
        title: "Hyundai Sonata",
        price: "15 000"
    },
    {
        id:"car4",
        brand_id: "kia",
        image: "/assets/images/cars/Twitter post - 4.png",
        title: "KIA Sportage",
        price: "25 000"
    },
    {
        id:"car5",
        brand_id: "land-rover",
        image: "/assets/images/cars/Twitter post - 5.png",
        title: "Land Rover Range Rover",
        price: "55 000"
    },
    {
        id:"car6",
        brand_id: "mercedes",
        image: "/assets/images/cars/Twitter post - 6.png",
        title: "Mercedes Benz C230",
        price: "19 000"
    },
    {
        id:"car7",
        brand_id: "nissan",
        image: "/assets/images/cars/Twitter post - 7.png",
        title: "Nissan XTrail",
        price: "22 000"
    },
    {
        id:"car8",
        brand_id: "toyota",
        image: "/assets/images/cars/Twitter post - 8.png",
        title: "Toyota Corolla",
        price: "12 400"
    }
];

let placeForTabs = document.querySelector(".tab-buttons");

let tabTemplate = "";

tabs.forEach(item=>{
    tabTemplate += `
        <button class="tab-button  ${item.class}" id="${item.id}">
            ${item.brand}
        </button>
    `; 
});

placeForTabs.innerHTML = tabTemplate;




    let placeForCars = document.querySelector("#car-place")

    let CarTemplate = "";

    cars.forEach(car=>{
        CarTemplate+= `
         <div class="car-card" data-brand = "${car.brand_id}"> 
                                <img src="${car.image}" alt="car">
                                <div class="row-start">
                                    <span class="price">${car.price}</span>
                                    <span>T</span>
                                </div>
                                <h3>${car.title}</h3>
                                <button class="add-button">
                                    добавить
                                </button>
                            </div>`;
    });


placeForCars.innerHTML = CarTemplate;


let carCards = document.querySelectorAll(".car-card")

let tabButtons = document.querySelectorAll(".tab-button");
    tabButtons.forEach(item=>{
        item.onclick = function(){

            let filter = item.getAttribute("id");
            tabButtons.forEach(a=>{
                a.classList.remove("active");
                
            });
            item.classList.add("active");

            carCards.forEach(card=>{
                let cardFilter =  card.getAttribute("data-brand");
            if (filter==cardFilter||filter ==="all"){
                card.classList.remove("hide");

            }else{
                card.classList.add("hide");
            } })

        }
    });
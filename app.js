let h2 = document.querySelector("h2");
let select = document.querySelector("select");
let option = document.querySelector("option");
let img = document.querySelector("img");

select.addEventListener("change", function(detail){
    
    let car = detail.target.value; 
    h2.innerHTML = (`Congrajulation ${car} car is seleted.`);

    if(car === "coroala"){
        img.src = 'coroala.png';
    }
    else if(car === "Hilux"){
        img.src = 'Hilux.png';
    }
     else if(car === "land-cruizer"){
        img.src = 'land-cruizer.png';
     }
    else if(car === "fortuner"){
        img.src = 'fortuner.png';
    }
})
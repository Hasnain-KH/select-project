let h2 = document.querySelector("h2");
let select = document.querySelector("select");
let option = document.querySelector("option");
let img = document.querySelector("img");

select.addEventListener("change", function(detail){
    
    let car = detail.target.value; 
    h2.innerHTML = (`Congrajulation ${car} car is seleted.`);

    if(car === "coroala"){
        img.src = '../assets/coroala.png';
    }
    else if(car === "Hilux"){
        img.src = '../assets/Hilux.png';
    }
    else if(car === "land cruizer"){
        img.src = '../assets/land cruizer.png';
    }
    else if(car === "fortuner"){
        img.src = '../assets/coroala.png';
    }
})
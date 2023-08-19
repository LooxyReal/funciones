const container = document.getElementById("container")

function card() {
    const cardc = document.createElement('div');
    cardc.classList.add("card")
    
    const cardTitle = document.createElement("h2");
    cardTitle.textContent = 'title';

    const cardImg = document.createElement("Img");
    cardImg.src = "https://i.pinimg.com/736x/c5/72/d8/c572d872e9b843526da0fd61fb6f0926.jpg"
    cardImg.style.width = "100%"

    const cardContent = document.createElement("p");
    cardContent.textContent  = "Hola manito,¿como estás?,yo me encuentro muy bien"


    cardc.appendChild(cardTitle);
    cardc.appendChild(cardContent);
    cardc.appendChild(cardImg);

    container.appendChild(cardc)
}


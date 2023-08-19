function createcard() {
    const card = document.createElement("div"); 
    card.classList.add("card");

    const  cardTitle = document.createElement("h2");
    cardTitle.textContent  = "Hola";

    const cardContent = document.createElement("p");
    cardContent.textContent = "como tas";

    card.appendChild(cardTitle);
    card.appendChild(cardContent);

    container.appendChild(card);
    

}
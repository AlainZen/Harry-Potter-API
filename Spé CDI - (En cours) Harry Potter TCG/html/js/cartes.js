document.addEventListener("DOMContentLoaded", function () {
  // API URL
  const apiUrl = "https://hp-api.lainocs.fr/characters";

  const cardContainer = document.getElementById("card-container");
  const houseFilter = document.getElementById("house-filter"); //Bon j'ai le seum il a pas marché a ça va prendre le code au prof
  const filterButton = document.getElementById("filter-button");

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((cardData) => {
        const card = createCard(cardData);
        cardContainer.appendChild(card);
      });
    })
    .catch((error) => {
      console.error("Erreur lors du fetch des données:", error);
    });

  // Créa d'la cate
  function createCard(cardData) {
    const card = document.createElement("div");
    card.classList.add("card");

    const cardImage = document.createElement("img");
    cardImage.classList.add("card-image");
    cardImage.src = cardData.image;
    cardImage.alt = "Image de la carte";

    const cardDetails = document.createElement("div");
    cardDetails.classList.add("card-details");

    const cardName = document.createElement("h2");
    cardName.classList.add("card-name");
    cardName.textContent = cardData.name;

    const cardLink = document.createElement("a");
    cardLink.classList.add("card-link");
    cardLink.href = `detail.html?id=${cardData.id}`;
    cardLink.textContent = "Voir les détails";

    card.appendChild(cardImage);
    card.appendChild(cardDetails);
    cardDetails.appendChild(cardName);
    card.appendChild(cardLink);

    card.addEventListener("mouseover", function () {
      cardName.style.display = "block"; // affiche le nom de la carte lorsque survolé
    });

    card.addEventListener("mouseout", function () {
      cardName.style.display = "none"; // le cache
    });

    return card;
  }

  // ----------------------------------------Listener pour le filtre
  filterButton.addEventListener("click", function () {
    filterCardsByHouse(houseFilter.value);
  });

  // ------------------------------------------------------Fonc du filtre
  function filterCardsByHouse(house) {
    const cards = document.querySelectorAll(".card");

    cards.forEach((card) => {
      const houseName = card.getAttribute("data-house");
      if (house === "" || house === houseName) {
        card.style.display = "block"; // affiche les cartes de la maison selectionner
      } else {
        card.style.display = "none"; // Pour cacher les maison non selectionner
      }
    });
  }
});

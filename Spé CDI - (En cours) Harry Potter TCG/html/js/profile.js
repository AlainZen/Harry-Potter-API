document.addEventListener("DOMContentLoaded", function () {
  //Sim d'api pour les données cartes //plus utilisée
  const cardsData = [
    {
      id: 1,
      name: "Tu est un sorcier harry",
      house: "Gryffondor",
      actor: "Daniel Radcliffe",
      rarity: "SR",
      image: "image1.jpg",
    },
    {
      id: 2,
      name: "Carte test",
      house: "Serpentard",
      actor: "Tom Felton",
      rarity: "R",
      image: "hp-card-databaise/Carte Poké01.png",
    },
    {
      id: 3,
      name: "Akhy Potter",
      house: "Serpentard",
      actor: "Daniel Radcliffe",
      rarity: "SSR",
      image: "image2.jpg",
    },
    {
      id: 4,
      name: "c'est LEVIOOOOOOOSA",
      house: "PoufSoufle",
      actor: "Emma Watson",
      rarity: "R",
      image: "image2.jpg",
    },
    {
      id: 5,
      name: "Ganda euhhhhh Dumbledor",
      house: "Pas de maison",
      actor: "Tom Felton",
      rarity: "SSR",
      image: "image2.jpg",
    },
    {
      id: 6,
      name: "Doby est un elfe liiiibre",
      house: "Serpentard",
      actor: "Toby Jones",
      rarity: "R",
      image: "image2.jpg",
    },
    {
      id: 7,
      name: "Elle est ou la coke harry",
      house: "Pas de maison",
      actor: "Michael Gambon",
      rarity: "SSR",
      image: "image2.jpg",
    },
    {
      id: 8,
      name: "Wsh",
      house: "Serpentard",
      actor: "Tom Felton",
      rarity: "R",
      image: "image2.jpg",
    },
  ];

  const cardContainer = document.getElementById("cardContainer");

  //cration d'une carte pour chaque donnée
  cardsData.forEach((data) => {
    const card = createCard(data);
    cardContainer.appendChild(card);
  });
});

//fonction d'la crea
function createCard(data) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.setAttribute("data-id", data.id);

  const cardDetails = document.createElement("div");
  cardDetails.classList.add("card-details");
  const detailsHTML = `
        <h2>${data.name}</h2>
        <p>Maison du personnage: ${data.house}</p>
        <p>Nom de l'acteur: ${data.actor}</p>
        <p>Rareté: ${data.rarity}</p>
    `;
  cardDetails.innerHTML = detailsHTML;

  const image = document.createElement("img");
  image.src = data.image;
  image.alt = data.name;

  card.appendChild(image);
  card.appendChild(cardDetails);

  cardDetails.innerHTML = detailsHTML;

  card.appendChild(image);
  card.appendChild(cardDetails);

  card.addEventListener("click", () => {
    const cardId = card.getAttribute("data-id");
    window.location.href = `details.html?id=${cardId}`; //Rediriger vers la page de détails (faut fr la page) avec l'ID de la carte
  });

  return card;

  //-------------------------------------------------------------------carte fav et possedée

  function showOwnedCards() {
    const ownedCards = cardsData.filter((card) => card.owned);
    cardContainer.innerHTML = ""; //Clear les anciennes infos
    ownedCards.forEach((data) => {
      const card = createCard(data);
      cardContainer.appendChild(card);
    });
  }

  function showFavoriteCards() {
    const favoriteCards = cardsData.filter((card) => card.favorite);
    cardContainer.innerHTML = "";
    favoriteCards.forEach((data) => {
      const card = createCard(data);
      cardContainer.appendChild(card);
    });
  }
}
//-------------------------------------------------------------------carte fav et possedée

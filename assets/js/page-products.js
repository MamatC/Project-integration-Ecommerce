/* eslint-disable no-const-assign */
/* eslint-disable no-unused-expressions */
/* eslint-disable max-len */
/* eslint-disable spaced-comment */
/* eslint-disable no-undef */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable quotes */
/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable camelcase */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-plusplus */
/* eslint-disable eol-last */
// eslint-disable-next-line camelcase
const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
console.log(params.id);
console.log(params.type);

let url;
if (params.type === 'promo') {
  url = './assets/js/productsPromo.json';
}
if (params.type === 'news') {
  url = './assets/js/productsNews.json';
}
if (params.type === 'ventes') {
  url = './assets/js/productsVentes.json';
}
if (params.type === 'arrivees') {
  url = './assets/js/productsArrivees.json';
}

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    // eslint-disable-next-line no-console
    console.log(data);
    let produit;
    data.forEach((product) => {
      if (product.id === Number(params.id)) {
        produit = product;
      }
    });
    console.log(produit);
    const containProducts = document.querySelector('.productsDetails');
    containProducts.innerHTML = `
    <div class="productsDetails__card">
      <img src="${produit.image}" alt="${produit.title},${produit.subtitle}">
      <div class="productsDetails__card__text">
        <h2>${produit.title}</h2>
        <h3>${produit.subtitle}</h3>
        <p>${produit.description}</p>
        <p><strong>${produit.price}€</strong></p>
        <p>au lieu de ${produit.price_before}€</p>
        <form>
          <label>Quantité</label>
          <input id="valeurInput" min="0" name="quantite" value="1" type="number">
          <input id="btn" type="submit" value="Ajouter au panier">
          <p><a href="page-panier.html">Voir mon panier</a></p>
        </form>
      </div>
    </div>
      `;
    const btnAjout = document.querySelector('#btn');

    btnAjout.addEventListener('click', (event) => {
      // preventDefault permet de rester sur la page et n'effectue pas l'action submit du bouton
      event.preventDefault();
      const quantiteProduit = document.querySelector('#valeurInput').value;

      //fabrique de l'objet avec clef valeur qui sera stocker dans le local storage
      const tabProduit = {
        id: produit.id,
        titre: produit.title,
        soustitre: produit.subtitle,
        //number permet de renvoyer un nombre plutôt qu'une chaine de caractère
        quantite: Number(quantiteProduit),
        image: produit.image,
        price: produit.price,
        priceTotal: quantiteProduit * produit.price,
      };
      console.log(tabProduit);

      // Récupérer le panier dans le localStorage
      let getStorage = JSON.parse(localStorage.getItem('produit'));
      console.log(getStorage);

      if (getStorage) {
        const product = getStorage.find(
          // eslint-disable-next-line comma-dangle
          (item) => item.id === Number(params.id)
        );
        if (product) {
          product.quantite += Number(quantiteProduit);
          product.priceTotal = product.quantite * produit.price;
          localStorage.setItem('produit', JSON.stringify(getStorage));
        } else {
          getStorage.push(tabProduit);
          localStorage.setItem('produit', JSON.stringify(getStorage));
        }
      } else {
        getStorage = [];
        getStorage.push(tabProduit);
        localStorage.setItem('produit', JSON.stringify(getStorage));
      }
    });
  });

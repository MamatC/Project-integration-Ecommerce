/* eslint-disable prefer-template */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable prefer-const */
// Récupérer le panier dans le localStorage
let getStorage = JSON.parse(localStorage.getItem('produit'));
console.log(getStorage);

const containPanier = document.querySelector('.productsPanier');
getStorage.forEach((produit) => {
  containPanier.innerHTML += `
  <div class="productsPanier__grid">
      <div>${produit.titre}</div>
      <div>${produit.soustitre}</div>
      <div><img src="${produit.image}" alt="${produit.titre},${produit.soustitre}"></div>
      <div>${produit.price}€</div>
      <div>Quantité<input data-id="${produit.id}" id="valeurInput" min="0" name="quantite" value="${produit.quantite}" type="number"></div>
      <div id="total-${produit.id}">${produit.priceTotal}</div>
      <div><button data-id="${produit.id}">Supprimer</button></div>
  </div>
    `;
});
const changeQuantite = document.querySelectorAll('#valeurInput');
changeQuantite.forEach((item) => {
  item.addEventListener('change', (event) => {
    const quantite = event.target.value;
    // eslint-disable-next-line prefer-destructuring
    const id = event.target.dataset.id;
    let produit = getStorage.find((product) => product.id === Number(id));
    console.log(quantite);
    produit.quantite = quantite;
    produit.priceTotal = 'Total =' + Number(quantite) * Number(produit.price) + '€';
    // eslint-disable-next-line prefer-template
    const containTotal = document.querySelector('#total-' + id);
    // console.log(produit.priceTotal);
    containTotal.innerHTML = produit.priceTotal;
    localStorage.setItem('produit', JSON.stringify(getStorage));
  });
});

const containBtn = document.querySelectorAll('button');
containBtn.forEach((product) => {
  product.addEventListener('click', (event) => {
    // Récupérer l'id du produit
    const id = event.target.dataset.id;
    console.log(id);
    // Supprimer le produit du panier à l'aide de l'id du produit
    // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
    // eslint-disable-next-line radix
    getStorage = getStorage.filter((item) => item.id !== Number(id));

    // Mettre à jour le panier dans le localStorage
    localStorage.setItem('produit', JSON.stringify(getStorage));

    // Recharger la page pour afficher les nouvelles données
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  });
});

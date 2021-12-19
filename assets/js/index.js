/* eslint-disable comma-dangle */
/* eslint-disable spaced-comment */
/* eslint-disable no-shadow */
/* eslint-disable no-plusplus */
/* eslint-disable no-const-assign */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
/* eslint-disable prefer-destructuring */
// eslint-disable-next-line spaced-comment

//************/ FETCH PRODUITS PROMOTIONS
fetch('./assets/js/productsPromo.json')
  .then((response) => response.json())
  .then((data) => {
    // eslint-disable-next-line no-console
    console.log(data);
    const containCardsPromo = document.querySelector('.sectionPromotions');

    for (let i = 0; i < data.length; i++) {
      const id = data[i].id;
      const title = data[i].title;
      const subtitle = data[i].subtitle;
      const price_before = data[i].price_before;
      const price = data[i].price;
      const reduction = data[i].reduction;
      const description = data[i].description;
      const image = data[i].image;

      containCardsPromo.innerHTML += `
        <div class="sectionPromotions__card">
          <a href="page-products.html?type=promo&id=${id}">
            <div class="sectionPromotions__card__percent">${reduction}</div>
            <img src="${image}"/>
            <div class="sectionPromotions__card__text">
              <h2>${title}</h2>
              <h3>${subtitle}</h3>
              <p>${price}€</p>
              <p>au lieu de ${price_before}€</p>
            </div>
          </a>  
        </div>
      `;
    }
  })
  .catch((error) => {
    // eslint-disable-next-line no-alert
    alert(`erreur: ${error}`);
  });

//* ***********/ FETCH PRODUITS NOUVEAUTES

fetch('./assets/js/productsNews.json')
  .then((response) => response.json())
  .then((data) => {
    // eslint-disable-next-line no-console
    console.log(data);
    const containCardsNews = document.querySelector('.sectionNews__nouveautes');

    for (let i = 0; i < data.length; i++) {
      const id = data[i].id;
      const title = data[i].title;
      const subtitle = data[i].subtitle;
      const price_before = data[i].price_before;
      const price = data[i].price;
      const reduction = data[i].reduction;
      const description = data[i].description;
      const image = data[i].image;

      containCardsNews.innerHTML += `
          <div class="sectionNews__nouveautes__card">
            <a href="page-products.html?type=news&id=${id}">
              <img src="${image}" alt="${title},${subtitle}">
            </a> 
            <div class="sectionNews__nouveautes__card__flex">
              <div class="sectionNews__nouveautes__card__flex__text">
                <h2>${title}</h2>
                <h3>${subtitle}</h3>
                <p>${price}€</p>
                <p>au lieu de ${price_before}€</p>
              </div>
              <div class="sectionNews__nouveautes__card__flex__bottom">
                <p>Nouveauté</p>
                <div class="sectionNews__nouveautes__card__flex__bottom__panier">
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      fill="currentColor"
                      class="bi bi-cart3"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                      />
                    </svg>
                  </a>
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      fill="currentColor"
                      class="bi bi-heart"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
      `;
    }
  })
  .catch((error) => {
    // eslint-disable-next-line no-alert
    alert(`erreur: ${error}`);
  });

//************/ FETCH PRODUITS MEILLEURES VENTES
fetch('./assets/js/productsVentes.json')
  .then((response) => response.json())
  .then((data) => {
    // eslint-disable-next-line no-console
    console.log(data);
    const containCardsVentes = document.querySelector(
      '.container__sectionLeft'
    );

    for (let i = 0; i < data.length; i++) {
      const id = data[i].id;
      const title = data[i].title;
      const subtitle = data[i].subtitle;
      const price_before = data[i].price_before;
      const price = data[i].price;
      const reduction = data[i].reduction;
      const description = data[i].description;
      const image = data[i].image;

      containCardsVentes.innerHTML += `
      <div class="container__sectionLeft__meilleursVentes">
        <div class="container__sectionLeft__meilleursVentes__card">
          <a href="page-products.html?type=ventes&id=${id}">
            <img src="${image}"/>
          </a>  
          <div class="container__sectionLeft__meilleursVentes__card__text">
            <h2>${title}</h2>
            <h3>${subtitle}</h3>
            <p>${price}€</p>
            <p>au lieu de ${price_before}€</p>
          </div>
        </div>
      </div>
      `;
    }
  })
  .catch((error) => {
    // eslint-disable-next-line no-alert
    alert(`erreur: ${error}`);
  });

//************/ FETCH PRODUITS NOUVELLES ARRIVEES
fetch('./assets/js/productsArrivees.json')
  .then((response) => response.json())
  .then((data) => {
    // eslint-disable-next-line no-console
    console.log(data);
    const containCardsArrivees = document.querySelector(
      '.container__sectionRight'
    );

    for (let i = 0; i < data.length; i++) {
      const id = data[i].id;
      const title = data[i].title;
      const subtitle = data[i].subtitle;
      const price_before = data[i].price_before;
      const price = data[i].price;
      const reduction = data[i].reduction;
      const description = data[i].description;
      const image = data[i].image;

      containCardsArrivees.innerHTML += `
      <div class="container__sectionRight__nouvellesArrivees">
        <div class="container__sectionRight__nouvellesArrivees__card">
          <a href="page-products.html?type=arrivees&id=${id}">
            <img src="${image}"/>
          </a>  
          <div class="container__sectionRight__nouvellesArrivees__card__text">
            <h2>${title}</h2>
            <h3>${subtitle}</h3>
            <p>${price}€</p>
            <p>au lieu de ${price_before}€</p>
          </div>
        </div>
      </div>
      `;
    }
  })
  .catch((error) => {
    // eslint-disable-next-line no-alert
    alert(`erreur: ${error}`);
  });

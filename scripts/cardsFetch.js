const popularDishes = document.getElementById("popular-dishes")
const todaysSpecial = document.getElementById("todays-special")
const customerReviews = document.getElementById("customer-reviews")

const fetchCardsData = () => {
  fetch ('../data/localData.json')
    .then( res => res.json())
    .then( json => {
      buildPopularDishesCards(json);
      buildTodaysSpecialCards(json);
      buildReviewCards(json);
    })
    .catch(error => console.log(error, "There has been an error"))
}

const buildPopularDishesCards = (json) => {
  let output = "";
  json.popular_dishes.map((dishData) => {
    output += `
        <figure class="popular-card">
          <img class="popular-card-image" src=${dishData.image_url} alt="Dish Image"/>
          <div class="add-to-fav"> 
            <i class="ion-android-add"></i>
            <span>Add to Favourite</span>
          </div>
          <figcaption>
            <h5>${dishData.name}</h5>
            <p>${dishData.star_rating}</p>
            <div class="price">
              <h6>Kr. ${dishData.price}</h6> 
              <button>ADD TO CART</button>
            </div>
          </figcaption><a href="#"></a>
        </figure>   
              `;
    popularDishes.innerHTML = output;
  });
};

const buildTodaysSpecialCards = (json) => {
  let output = "";
  json.todays_special.map((dishData) => {
    output += `
        <div class="card-todays-special">
          <img class="todays-image-container" src=${dishData.image_url} alt="Card Image">
          
          <div class="stars-container">
            <p>${dishData.star_rating}</p>
            <div class="card-icons-container">
              <img src="./assets/icons/heart.svg" alt="heart-icon">
            </div>
          </div>
          <h4>${dishData.name}</h4>
          <p>${dishData.short_description}</p>
          <div class="card-bottom-container">
            <h3>Kr. ${dishData.price}</h3>
            <button>ADD TO CART</button>
          </div>
        </div>`
    todaysSpecial.innerHTML = output;
  });
};

const buildReviewCards = (json) => {
  let output = "";
  json.customer_reviews.map( reviewData => {
    output += `
        <div class="review-card">
          <div class="top-container">
            <img class="avatar-image" src=${reviewData.avatar_image_url} alt="Image">
            <div class="review-card-top-center-div">
              <div class="star-container">
                <h5 class="avatar-text">${reviewData.name}</h5>
                <p>${reviewData.location}</p>
                <p>${reviewData.star_rating}</p>
              </div>
            </div>
            <img class="quotes-image" src=${reviewData.quote_image} alt="closing-quotes-image">
          </div>
          <p>${reviewData.review}</p>
          
        </div>`;
    customerReviews.innerHTML = output;
  });
};

fetchCardsData();
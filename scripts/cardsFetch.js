const popularDishes = document.getElementById("popular-dishes")
const todaysSpecial = document.getElementById("todays-special")
const customerReviews = document.getElementById("customer-reviews")

// const randomPriceGenerator = Math.floor(Math.random() * 200) 
//Generates a random number betweeon 0 & 200
// substitute the line with <p>Kr. ${dishData.price}</p> to get data from fetch

const buildPopularDishesCards = (json) => {
  let output = ""
  json.popular_dishes.map((dishData) => {
    console.log(dishData);
    output += `
        <div class="card-popular-dishes">
          <div class="card-icons-container">
            <img class="eye-icon" src="./assets/icons/dont-watch.svg" alt="watch-icon">
            <img class="heart-icon" src="./assets/icons/heart-outline.svg" alt="heart-icon">
          </div>
          <img src=${dishData.image_url} alt="Food Image">
          <p><b>${dishData.name}</b></p>
          <div class="stars-container">
            <p>${dishData.star_rating}</p>
          </div>
          <div class="card-bottom-container">
            <p>Kr. ${dishData.price}</p>
            <button>Add to Cart</button>
          </div>
        </div>   
              `;
    popularDishes.innerHTML = output;
  })
}

const buildTodaysSpecialCards = (json) => {
  let output = ""
  json.todays_special.map((dishData) => {
    output += `
        <div class="card-todays-special">
          <div class="card-icons-container">
            <img src="./assets/icons/heart-outline.svg" alt="heart-icon">
          </div>
          <img src=${dishData.image_url} alt="Card Image">
          <div class="stars-container">
            <p>${dishData.star_rating}</p>
          </div>
          <p><b>${dishData.name}</b></p>
          <p>${dishData.short_description}</p>
          <div class="card-bottom-container">
            <p>Kr. ${dishData.price}</p>
            <button>Add to Cart</button>
          </div>
        </div>`
    todaysSpecial.innerHTML = output;
  })
}

const buildReviewCards = (json) => {
  let output = ""
  json.customer_reviews.map( reviewData => {
    output += `
        <div class="review-card">
          <div class="top-container">
            <img class="avatar-image" src=${reviewData.avatar_image_url} alt="Image">
            <div class="review-card-top-center-div">
              <p class="avatar-text">${reviewData.name}</p>
              <div class="star-container">
                <p>${reviewData.star_rating}</p>
              </div>
            </div>
            <img class="quotes-image" src=${reviewData.quote_image} alt="closing-quotes-image">
          </div>
          <p>${reviewData.review}</p>
          <p>Location: ${reviewData.location}</p>
        </div>`;
    customerReviews.innerHTML = output;
  })
}

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


fetchCardsData()
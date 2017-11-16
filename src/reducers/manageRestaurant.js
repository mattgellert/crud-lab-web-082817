
import cuid from 'cuid';
export const cuidFn = cuid;
let rest_id=0;
let rev_id=0;

export default function manageRestaurants(state = {restaurants: [], reviews: []}, action) {

  switch (action.type) {
    case "ADD_RESTAURANT":
      rest_id++;
      return {
        restaurants: [
          ...state.restaurants,
          {
            id: rest_id,
            text: action.text
          }
        ],
        reviews: [...state.reviews]
      };
    case "DELETE_RESTAURANT":
      return {
        restaurants: [
          ...state.restaurants.filter(restaurant => restaurant.id !== action.id)
        ],
        reviews: [...state.reviews]
      };
    case "DELETE_REVIEW":
      return {
        restaurants: [...state.restaurants],
        reviews: [
          ...state.reviews.filter(review => review.id !== action.id)
        ]
      };
    case "ADD_REVIEW":
    rev_id++;
      return {
        restaurants: [...state.restaurants],
        reviews: [
          ...state.reviews,
          {
            id: rev_id,
            restaurantId: action.restaurantId,
            text: action.text
          }
        ]
      };
    default:
      return state;
  };
};

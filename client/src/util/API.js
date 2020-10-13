import axios from 'axios';

// call the api routes here
export default {
    getReviews: () => {
        return axios.get("api/users/reviews")
    },

    postReview: review => {
        return axios.post("api/users/review", review)
    }
}  

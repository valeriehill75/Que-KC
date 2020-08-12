import axios from 'axios';

export default {
    getRestaurants: function () {
            return axios.get("https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=Kansas%20City&categories=bbq", {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Authorization": "Bearer a-83pgcSEnbKnnW59CJH99_kgqnE6tyaF6x81jHZHu7UL9b-3O9Gqr5a5Y756E-LTfObydTTk0mOPTl8Yv54yH-SmOm6plnavRh-cWWXS1bGZkt-90-E_Oc_tpwuX3Yx"
            }
        })
    }
}


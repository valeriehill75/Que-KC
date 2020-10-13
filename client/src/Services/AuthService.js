// call the api routes here
export default {
    login : user => {
        return fetch('api/users/login', {
            method: "post",
            body: JSON.stringify(user),
            headers: {
                'Content-Type' : 'application/json'
            }
        }).then(res => {
            if(res.status !== 401) {
                return res.json().then(data => data)
            } else {
                return { isAuthenticated : false, user: {email : '', firstName : '', lastName : ''}};
            }
        })
    },

    register : user => {
        return fetch('/api/users/signup', {
            method: "post",
            body: JSON.stringify(user),
            headers: {
                'Content-Type' : 'application/json'
            }
        }).then(res => res.json())
          .then(data => data);
    },

    logout : () => {
        return fetch('/api/users/logout')
                .then(res => {
                    res.json()
                })
                .then(data => data);
    },

    isAuthenticated : () => {
        return fetch('/api/users/authenticated')
                    .then(res => {
                        if(res.status !== 401) {
                            return res.json().then(data => data)
                        } else {
                            return { isAuthenticated : false, user: {email : '', firstName : '', lastName : ''}};
                        }
                    });
    }
}
let api = {  
    getUserInfo: () => fetch(
        "/api/users/me",{
            method: "get"
        }
    ).then(v=>v.json()),
    registration: (data) => fetch(
        "/api/registr",{
            headers: {
                "Content-Type": "application/json",
            },
            method: "post",
            body: JSON.stringify(data)
        }
    ),
    login: (email, password) => fetch(
        "/api/login",{
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password })
        }
    ),
    logout: () => fetch(
        "/api/logout",
        { method: "post" }
    )
};

export default api;
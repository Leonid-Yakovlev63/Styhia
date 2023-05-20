let api = {  
    getUserInfo: () => fetch(
        "/api/users/me",{
            method: "get"
        }
    ).then(v=>v.json()),
    registratidata: (data) => fetch(
        "/api/registr",{
            method: "post",
            data: data
        }
    ),
    login: (email, password) => fetch(
        "/api/login",{
            method: "post",
            data: { email, password }
        }
    ),
    logout: () => fetch(
        "/api/logout",
        { method: "post" }
    )
};

export default api;
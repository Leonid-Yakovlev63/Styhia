let api = {
    /**
     * get authorized user info
     * @returns {Promise<{id:number,name:string,surname:string,status:string|null,avatar:number|null,role:string,createdAt}>}
     */
    getUserInfo: () => fetch(
        "/api/users/me",{
            method: "get"
        }
    ).then(v=>v.json()),
    registration: (data) => fetch(
        "/api/register",{
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
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
    ),
    /**
     * get info by id
     * @param {number} id 
     * @returns {Promise<{id:number,name:string,surname:string,status:string|null,avatar:number|null,role:string,createdAt}>} 
     */
    getUserInfoById: (id) => fetch(
        `/api/users/${id}`,{
            method: "get"
        }
    ).then(v=>v.json()),
    /**
     * get posts of user
     * @param {number} offset 
     * @returns {Promise<{id:number,author:{id:number,name:string,surname:string,avatar:number},title:string|null,text:string|null,files:{id:number,name:string,type:"IMAGE"|"ANY"}[]|null,likes:number,dislikes:number,createdAt:Date}[]>} 
     */
    getUserPosts: (offset=null) => fetch(
        `/api/posts/my${offset===null?"":`?offset=${offset}`}`,{
            method: "get"
        }
    ).then(v=>v.json()),
    /**
     * get posts lent of user
     * @param {number} offset 
     * @returns {Promise<{id:number,author:{id:number,name:string,surname:string,avatar:number},title:string|null,text:string|null,files:{id:number,name:string,type:"IMAGE"|"ANY"}[]|null,likes:number,dislikes:number,createdAt:Date}[]>} 
     */
    getUserLent: (offset=null) => fetch(
        `/api/posts/lent${offset===null?"":`?offset=${offset}`}`,{
            method: "get"
        }
    ).then(v=>v.json()),
    /**
     * get posts by user id
     * @param {number} id 
     * @param {number} offset 
     * @returns {Promise<{id:number,author:{id:number,name:string,surname:string,avatar:number},title:string|null,text:string|null,files:{id:number,name:string,type:"IMAGE"|"ANY"}[]|null,likes:number,dislikes:number,createdAt:Date}[]>} 
     */
    getPostsByUserId: (id, offset=null) => fetch(
        `/api/posts/${id}${offset===null?"":`?offset=${offset}`}`,{
            method: "get"
        }
    ).then(v=>v.json()),
    /**
     * get all user dialogs
     * @param {number} id 
     * @param {number} offset 
     * @returns {Promise<{id:number,}[]>} 
     */
    getDialogs: () => fetch(
        `/api/chats`,{
            method: "get"
        }
    ).then(v=>v.json()),
};

export default api;
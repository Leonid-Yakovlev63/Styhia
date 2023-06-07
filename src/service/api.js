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
     * @returns {Promise<{id:number,name:string,surname:string,status:string|null,avatar:number|null,role:string,createdAt}[]>}
     */
    getUserFriends: () => fetch(
        `/api/friends`,{
            method: "get"
        }
    ).then(v=>v.json()),
    /**
     * @param {number} id 
     * @returns {Promise<{id:number,name:string,surname:string,status:string|null,avatar:number|null,role:string,createdAt}[]>}
     */
    getUserFriendsById: (id) => fetch(
        `/api/friends/${id}`,{
            method: "get"
        }
    ).then(v=>v.json()),
    sendFriendRequest: (id) => fetch(
        `/api/friends/${id}`,{
            method: "post"
        }
    ),
    getFriendRequests: () => fetch(
        `/api/friends/requests`,{
            method: "get"
        }
    ).then(v=>v.json()),
    getMyFriendRequests: () => fetch(
        `/api/friends/requests/my`,{
            method: "get"
        }
    ).then(v=>v.json()),
    confirmFriendRequest: (id) => fetch(
        `/api/friends/requests/${id}`,{
            method: "post"
        }
    ),
    searchFriends: (text) => fetch(
        `/api/users/search?text=${encodeURIComponent(text)}`
    ).then(v=>v.json()),
    uploadFiles: (body) => fetch(
        "/api/files",{
            method: "put",
            body: body
        }
    ),
    sendPost: (title, text, files) => fetch(
        "/api/posts",{
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title:title??null,
                text:text??null,
                files:files??null
            })
        }
    ),
    removePost: (id) => fetch(
        `/api/posts/${id}`,{
            method: "delete"
        }
    ),
    setLike: (id) => fetch(
        `/api/posts/${id}/like`,{
            method: "post"
        }
    ),
    setDislike: (id) => fetch(
        `/api/posts/${id}/dislike`,{
            method: "post"
        }
    ),
    removeReact: (id) => fetch(
        `/api/posts/${id}/none`,{
            method: "post"
        }
    ),
    getLikes: (id) => fetch(
        `/api/posts/${id}/like`,{
            method: "get"
        }
    ).then(v=>v.json()),
    getDislike: (id) => fetch(
        `/api/posts/${id}/dislike`,{
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

import { setup } from 'axios-cache-adapter'

import Axios from "axios";

//  const API = Axios.create({ baseURL: "https://hookserver.herokuapp.com/"});



const API = setup({
  
  baseURL: 'https://hookback.herokuapp.com/',
  
  cache: {
   
    maxAge: 60 * 60 * 1000, // 2 min instead of 15 min
    exclude: { query: true }
  }
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }

  return req;
});
export const fetchPosts2 = async ({ pageParam = 1 }) => {
   const response = await fetch(
       `https://hookback.herokuapp.com/posts?page=${pageParam}&limit=6`,
  
   );
   const results = await response.json();
       return { results, nextPage: pageParam + 1, totalPages: 100 };
   }; 
   
   export const fetchPosts3 = async ({ pageParam = 1 }) => {
    const response = await fetch(
        `https://hookback.herokuapp.com/posts?page=${pageParam}&limit=6`,
   
    );
    const results = await response.json();
        return { results, nextPage: pageParam + 1, totalPages: 100 };
    }; 
    
export const fetchPost = (id) => API.get(`/posts/${id}`);
export const fetchPosts = (page) => API.get(`/posts?page=${page}`);
export const fetchPostsBySearch = (searchQuery) => API.get(`/posts/search?searchQuery=${searchQuery.search || 'none'}&tags=${searchQuery.tags}`);
export const createPost = (newPost) => API.post('/posts', newPost);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
export const userStatus = (id, userStatus) => API.patch(`/user/${id}`, userStatus);
export const userImg = (id, userImg) => API.patch(`/user/${id}/img`, userImg);
export const deletePost = (id) => API.delete(`/posts/${id}`);
export const fetchUser = (id) => API.get(`/user/${id}`);
export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);
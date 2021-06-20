import * as actionTypes from './actionTypes';
import axios from 'axios'; 
import { navigate } from '../NavigationRoot';

var path = "sajek";

export const addComment = (author, comment, dbPath) => dispatch => {
    var id;
    
    const newComment = {
        comments: {
            author: author,
            comment: comment,
        },
    }
    // newComment.commentTime = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date());
    newComment.commentTime = new Date().toDateString();
    axios.post(`https://readerschoice-2021-default-rtdb.firebaseio.com/${dbPath}.json`, newComment)
        .then(response => {
            console.log(response);
            id = response.data.name;
            newComment.id = id;
            console.log(id)
            dispatch(commentConcat(newComment));
            return response.data;
        })
        .catch(error => console.log(error)) 
}

export const commentConcat = comment => {
    return {
        type: actionTypes.ADD_COMMENTS,
        payload: comment,
    }
}

export const loadComments = comments => {
    return {
        type: actionTypes.LOAD_COMMENTS,
        payload: comments,
    }
}

export const commentsLoadFailed = () => {
    return {
        type: actionTypes.COMMENTS_LOAD_FAILED,
    }
}

export const fetchComments = (dbPath) => dispatch => {
    // dbPath = "ratargul"; 
        axios.get(`https://readerschoice-2021-default-rtdb.firebaseio.com/${dbPath}.json`)
            .then(response => {
                console.log(response.data);
                dispatch(loadComments(response.data))
            })
}

export const authUser = token => {
    return {
        type: actionTypes.AUTHENTICATE_USER,
        payload: token
    }
}

export const removeToken = () => {
    return {
        type: actionTypes.REMOVE_TOKEN
    }
}

export const tryAuth = (email, password, mode) => dispatch => {
    let url = "";
    const API_KEY = "AIzaSyDMCCF9Yu5yTozKD3Suo_a2SPcU8zGyvYc";
    if (mode === "signup") {
        url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + API_KEY;
    } else if (mode === "login") {
        url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" + API_KEY;
    }
    console.log(url);
    fetch(url, {
        method: "POST",
        body: JSON.stringify({
            email: email,
            password: password,
            returnSecureToken: true
        }),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .catch(err => {
            console.log(err);
            alert("Authentication Failed!");
        })
        .then(res => res.json())
        .then(data => {
            if (data.error) {
                alert(data.error.message);
            } else {
                console.log(data.idToken)
                dispatch(authUser(data.idToken));
                navigate("Genre");
            }
            console.log(data)
        })
}

export const logout = () => {
    // localStorage.removeItem('token');
    // localStorage.removeItem('expirationTime');
    // localStorage.removeItem('userId'); 
    return {
        type: actionTypes.AUTH_LOGOUT,
    }
}






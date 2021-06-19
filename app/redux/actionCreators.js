import * as actionTypes from './actionTypes';
import axios from 'axios'; 

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



// import * as actionTypes from './actionTypes';
// // import { navigate } from '../NavigationRoot';

// export const addPlace = place => (dispatch, getState) => {
//     let token = getState().token;
//     console.log(token)
//     fetch(`https://my-places-4bd08-default-rtdb.firebaseio.com/places.json?auth=${token}`, {
//         method: "POST",
//         body: JSON.stringify(place)
//     })
//         .catch(error => console.log(error))
//         .then(response => response.json())
//         .then(data => console.log(data));
// }

// export const setPlaces = places => {
//     return {
//         type: actionTypes.SET_PLACES,
//         payload: places
//     }
// }

// export const loadPlaces = () => (dispatch, getState) => {
//     let token = getState().token;
//     fetch(`https://my-places-4bd08-default-rtdb.firebaseio.com/places.json?auth=${token}`)
//         .catch(err => {
//             alert("Something went wrong, sorry");
//             console.log(err);
//         })
//         .then(res => res.json())
//         .then(data => {
//             const places = [];
//             for (let key in data) {
//                 places.push({
//                     ...data[key],
//                     key: key
//                 })
//             }
//             dispatch(setPlaces(places));
//         });
// }


// export const deletePlace = key => {
//     return {
//         type: actionTypes.DELETE_PLACE,
//         payload: key
//     }
// }

// export const authUser = token => {
//     return {
//         type: actionTypes.AUTHENTICATE_USER,
//         payload: token
//     }
// }

// export const removeToken = () => {
//     return {
//         type: actionTypes.REMOVE_TOKEN
//     }
// }

// export const tryAuth = (email, password, mode) => dispatch => {
//     let url = "";
//     const API_KEY = "AIzaSyAwK6UUiyCsXSlNZElyx12XhQf6_jccNAY";
//     if (mode === "signup") {
//         url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + API_KEY;
//     } else if (mode === "login") {
//         url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" + API_KEY;
//     }
//     console.log(url);
//     fetch(url, {
//         method: "POST",
//         body: JSON.stringify({
//             email: email,
//             password: password,
//             returnSecureToken: true
//         }),
//         headers: {
//             "Content-Type": "application/json"
//         }
//     })
//         .catch(err => {
//             console.log(err);
//             alert("Authentication Failed!");
//         })
//         .then(res => res.json())
//         .then(data => {
//             if (data.error) {
//                 alert(data.error.message);
//             } else {
//                 console.log(data.idToken)
//                 dispatch(authUser(data.idToken));
//                 navigate("Places");
//             }
//             console.log(data)
//         })

// }






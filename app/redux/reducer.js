import * as actionTypes from './actionTypes';
import { SCIFI } from '../shared/scienceFiction';
import { HISTORY } from '../shared/history';
import { THRILLER } from '../shared/thriller';
import { COMICS } from '../shared/comics';

const INITIAL_STATE = {
    places: {
        scifi: SCIFI,
        history: HISTORY,
        thriller: THRILLER,
        comics: COMICS,
    },
    comments: [],
    commentsLoading: true,
    commentsErr: false,
    token: null,
    userId: null,
    authLoading: false,
    authFailedMsg: null,
    isAuth: false,
    token: null,
}

export const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.LOAD_COMMENTS:
            // for (let key in action.payload) {
            //     console.log(action.payload[key]); 
            // }
            let comments = [];
            for (let key in action.payload) {
                comments.push({
                    ...action.payload[key],
                    id: key,
                })
            }
            return {
                ...state,
                comments: comments,
                commentsLoading: false,
            }
        case actionTypes.COMMENTS_LOAD_FAILED:
            return {
                ...state,
                commentErr: true,
                commentsLoading: false,
            }
        case actionTypes.ADD_COMMENTS:
            let comment = action.payload;
            console.log(comment);
            return {
                ...state,
                comments: state.comments.concat(comment),
            }
        // Auth Cases
        case actionTypes.AUTH_SUCCESS:
            return {
                ...state,
                token: action.payload.token,
                userId: action.payload.userId,
            }
        case actionTypes.AUTH_LOGOUT:
            return {
                ...state,
                authFailedMsg: null,
                token: null,
                userId: null,
            }
        case actionTypes.AUTH_LOADING:
            return {
                ...state,
                authLoading: action.payload,
            }
        case actionTypes.AUTH_FAILED:
            return {
                ...state,
                authFailedMsg: action.payload,
            }
        case actionTypes.AUTHENTICATE_USER:
            return {
                ...state,
                isAuth: true,
                token: action.payload
            }
        case actionTypes.REMOVE_TOKEN:
            return {
                ...state,
                isAuth: false,
                token: null
            }
        default:
            return state;
    }
}
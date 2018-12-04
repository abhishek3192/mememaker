import {username, password} from './secrets'
export const RECEIVE_MEMES = 'RECEIVE_MEMES';
export const NEW_MEME = 'NEW_MEME'


function receiveMemes(json){
    const {memes} = json.data;

    return{
        type: RECEIVE_MEMES,
        memes
    }
}

// response.json is event handler which handles response of json
// from an api, Below function is fetching json from and api


function fetchMemeJson() {
    return fetch('https://api.imgflip.com/get_memes')
    .then(response => response.json())
}

export function fetchMeme() {
    return function(dispatch){
        return fetchMemeJson()
        .then(json => dispatch(receiveMemes(json)))
    }
}

function newMeme(meme) {
    return {
        type: NEW_MEME,
        meme
    }
}

function PostMemeJson(params){
    params['username'] = username;
    params['password'] = password;

    const bodyParams = Object.keys(params).map(key => {
        return encodeURIComponent(key) + '=' + encodeURIComponent(params[key])
    }).join('&');

    console.log('body params', bodyParams);

    return fetch('https://api.imgflip.com/caption_image', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/x-www-form-urlencoded'
        },
        body: bodyParams
    }).then(response => response.json())   
}

export function createMeme(new_meme_Object){
    return function(dispatch){
        return PostMemeJson(new_meme_Object)
        .then(new_meme => dispatch(newMeme(new_meme)))
    }
}

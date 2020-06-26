import auth0 from 'auth0-js';

export default class Auth{
    //This deals with the react Router's history so that Auth can perform redirects
    constructor(history){
        this.history = history;
        this.auth0 = new auth0.WebAuth({
            domain: process.env.REACT_APP_AUTH0_DOMAIN,
            clientID: process.env.REACT_APP_AUTH0_CLIENTID,
            redirectUri: process.env.REACT_APP_AUTH0_CALLBACK_URL,
            //gives us a JWT token to authenticate user when they login
            responseType: "token id_token",
            //permissions
            scope:"openid profile email"
        });
    }
    login = () => {
        this.auth0.authorize();
    }
}
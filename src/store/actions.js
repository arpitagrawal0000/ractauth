import * as actionTypes from './actionTypes';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START        
    };
};


export const authSuccess = (authData) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        authData: authData
    };
};

export const authFail = (error) => {
return {
    type: actionTypes.AUTH_FAIL,
    error: error
    };
};

export const auth = (values) => {
    return dispatch => {
        fetch("http://18.223.218.199:8080/api/v1.0/users/login/ ",  {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values)
        })
        .then(response => {
            if (response.statusCode) {
                console.log("error", response);
                dispatch(alert(response));
                return response.json();
            } else {
                console.log("response", response);
                dispatch({
                    type: auth.AUTH_SUCCESS,
                    payload: response,
                })
                //dispatch(authStoreToken(response.token))
                    window.location.href = "/homepage";
                }
 
            })  
            .catch(err => {
                console.log('error', err)
                alert("Authentication failed");
            })
    };
};


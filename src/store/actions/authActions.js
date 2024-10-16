export const loginRequest = (email, password) => ({
    type: 'LOGIN_REQUEST',
    payload: { email, password },
});

export const loginSuccess = (user) => ({
    type: 'LOGIN_SUCCESS',
    payload: user,
});

export const loginFailure = (error) => ({
    type: 'LOGIN_FAILURE',
    payload: error,
});


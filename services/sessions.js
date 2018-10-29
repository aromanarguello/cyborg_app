export const hasTokens = _ => sessionStorage.getItem('token');

export const setSession = session => {
    Object.keys(session).forEach(key => sessionStorage.setItem('token', session[key]));
};

export const signOut = _ => sessionStorage.clear();

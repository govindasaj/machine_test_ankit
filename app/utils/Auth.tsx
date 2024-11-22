import Cookies from 'js-cookie';

export const setAuthToken = (token: string): void => {
    Cookies.set('authToken', token, { expires: 1 / 288 });
};

export const getAuthToken = (): string | undefined => {
    return Cookies.get('authToken');
};

export const removeAuthToken = (): void => {
    Cookies.remove('authToken');
};
import clienteAxios from '../service/axios';

const tokenAuth = token => {
    if(token) {
        clienteAxios.defaults.headers.common['x-auth-token'] = token;
    } else {
        delete clienteAxios.defaults.headers.common['x-auth-token'];
    }
}
console.log(tokenAuth)

export default tokenAuth;
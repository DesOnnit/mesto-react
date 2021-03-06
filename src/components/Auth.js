export const BASE_URL = 'https://auth.nomoreparties.co';

export const register = (password, email) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({password, email})
  })
  .then((res) => {
    return res.json();
  })
  .then((res) => {
    return res;
  })
  .catch((err) => console.log(err));
};

export const authorize = (password, email) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({password, email})
  })    
  .then((res => res.json()))
  .then((data) => {
    if (data.token){
      localStorage.setItem('jwt', data.token);
      return data.token;
    } 
  })
  .catch(err => console.log(err))
};

export const getContent = token =>{
  return fetch(`${BASE_URL}/users/me`,{
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      "Authorization" : `Bearer ${token}`
    }
  })
  .then((res => res.json()))
  .catch(err => console.log(err))
}
const DEFAULT_HEADERS = {
  'Content-Type': 'application/json; charset=utf-8'
};
const IS_SUCCESS = response => response.status >= 200 && response.status < 300;
const IS_UNAUTHORIZED = response => response.status === 401;

function validateResponse(response = {}, options = {}) {
  const retry = response.clone()

  if (IS_UNAUTHORIZED(response) && !options.isAuth) {
    throw new Error('Your session has expired. Please log in again.')
    return
  }

  if (!IS_SUCCESS(response)) {
    return response.json()
      .then ((json) => {
        throw json
      })
  }

  return response.json()
    .catch(() => {
      return retry.text()
    })
}

export function setAuthorization (token) {
  DEFAULT_HEADERS.Authorization = token;
}

export function getAuthorization () {
  return DEFAULT_HEADERS.Authorization;
}

export function revokeAuthorization () {
  delete DEFAULT_HEADERS.Authorization;
}

export function get({ url, headers = {}, options = {}, timeout=10000 }) {

  return new Promise((res,rej)=>{
    let t = setTimeout(()=>{
      rej(new Error('TIMEOUT'))
    },timeout)
    fetch(`${url}`, {
      method: 'GET',
      ...options,
      headers: Object.assign({}, DEFAULT_HEADERS, headers)
    }).then((response)=>{
      clearTimeout(t)
      return res(validateResponse(response))
    }).catch((error) => {
       rej(error)
    });
  })
}

export function post({ url, payload, headers = {}, options = {}, timeout=10000 }) {
  return new Promise((res,rej)=>{
    let t = setTimeout(()=>{
      rej(new Error('TIMEOUT'))
    },timeout)
    return fetch(`${url}`, {
      method: 'POST',
      ...options,
      headers: Object.assign({}, DEFAULT_HEADERS, headers),
      body: JSON.stringify(payload)
    }).then((json) => {
      clearTimeout(t)
      return res(validateResponse(json, {isAuth: (url === '/mobile/v2/auth')}))
    }).catch((error) => {
      rej(error)
   });
  })
}

export function put({ url, payload, headers = {}, options = {}, timeout=10000 }) {

  return new Promise((res,rej)=>{
    let t = setTimeout(()=>{
      rej(new Error('TIMEOUT'))
    },timeout)
    return fetch(`${url}`, {
      method: 'PUT',
      ...options,
      headers: Object.assign({}, DEFAULT_HEADERS, headers),
      body: JSON.stringify(payload)
    }).then((response)=>{
      clearTimeout(t)
      return res(validateResponse(response))
    }).catch((error) => {
      rej(error)
   });
  })
}

export function del({ url, headers = {}, options = {}, timeout=10000 }) {
  return new Promise((res,rej)=>{
    let t = setTimeout(()=>{
      rej(new Error('TIMEOUT'))
    },timeout)
    return fetch(`${url}`, {
      method: 'DELETE',
      ...options,
      headers: Object.assign({}, DEFAULT_HEADERS, headers)
    }).then((response)=>{
      clearTimeout(t)
      return res(validateResponse(response))
    }).catch((error) => {
      rej(error)
   });
  })
}

export function postFormData({ url, payload, headers = {}, options = {}, timeout=30000 }) {
  headers.Authorization = DEFAULT_HEADERS.Authorization

  return new Promise((res,rej)=>{
    let t = setTimeout(()=>{
      rej(new Error('TIMEOUT'))
    },timeout)
    return fetch(`${url}`, {
      method: 'POST',
      ...options,
      headers: headers,
      body: payload
    }).then((json) => {
      clearTimeout(t)
      return res(validateResponse(json, {isAuth: (url === '/mobile/v2/auth')}))
    });
  })
}

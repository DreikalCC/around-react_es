export default class Api {
  constructor({address, groupId, headers}){
    this.address = address;
    this.groupId = groupId;
    this.baseUrl = this.address+this.groupId;
    this.headers = headers;
    this.auth = this.headers.authorization;
  }

  _checkResponse (res) {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error getting user data: ${res.status},
      ${res.statusText}`);
  }

  getInitialCards () {
    return fetch(`${this.baseUrl}/cards`, {
      headers: {
        authorization: this.auth
      }
    })
    .then(this._checkResponse)
  }

  getUserInfo (){
    return fetch(`${this.baseUrl}/users/me`, {
      headers: {
        authorization: this.auth
      }
    })
    .then(this._checkResponse)
  }

  postUserInfo(name, about){
    return fetch(`${this.baseUrl}/users/me`, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify({
        name: name,
        about: about
      })
    })
    .then(this._checkResponse)
  }

  postUserAvatar(link){
    return fetch(`${this.baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify({
        avatar: link
      })
    })
    .then(this._checkResponse)
  }

  postCard({name,link}){
    return fetch(`${this.baseUrl}/cards`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({
        name,
        link
      })
    })
    .then(this._checkResponse)
  }

  postLikes(cardId){
    return fetch(`${this.baseUrl}/cards/likes/${cardId}`, {
      method: "PUT",
      headers: this.headers,
      body: JSON.stringify({})
    })
    .then(this._checkResponse)
  }

  deleteLikes(cardId){
    return fetch(`${this.baseUrl}/cards/likes/${cardId}`, {
      method: "DELETE",
      headers: this.headers,
      body: JSON.stringify({})
    })
    .then(this._checkResponse)
  }

  deleteCard({cardId}){
    return fetch(`${this.baseUrl}/cards/${cardId}`, {
      method: "DELETE",
      headers: this.headers,
      body: JSON.stringify({})
    })
    .then(this._checkResponse)
  }
}
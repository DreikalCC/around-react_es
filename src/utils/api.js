import Api from "../components/Api";

export const api = new Api({
  address: "https://around.nomoreparties.co/v1/",
  groupId: 'web_es_cohort_02',
  token: '04346056-dea4-4d40-8541-43203e80bf1a',
  headers: {
    authorization: "04346056-dea4-4d40-8541-43203e80bf1a",
    "Content-Type": "application/json"
  }
});
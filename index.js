import axios from "axios";

export const getTodo = (id) => {
  return axios
    .get(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(response => response.data)
    .catch(err => err);
}

export const getTodos = () => {
    return axios
        .get("https://jsonplaceholder.typicode.com/todos")
        .then(response => response.data)
        .catch(err => err);
}
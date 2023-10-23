import axios from "axios";

export const getTodo = (id) => {
  return axios
    .get(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(response => response.data)
    .catch(err => err);
}

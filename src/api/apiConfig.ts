import axios from 'axios';

const BASEURL = 'http://localhost:3000';

export const api = axios.create({
  baseURL: BASEURL,
});

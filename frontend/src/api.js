// src/api.js
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080';

export default axios.create({
  baseURL: API_URL,
});


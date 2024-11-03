// src/api/index.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000';

export const fetchProducts = () => axios.get(`${API_BASE_URL}/products`).then(res => res.data);

export const fetchProductById = id => axios.get(`${API_BASE_URL}/products/${id}`).then(res => res.data);

export const addToCart = (productId) => axios.post(`${API_BASE_URL}/cart`, { productId });

import axios from "axios"

export const getAllProducts = async () => {
    return axios.get("https://fakestoreapi.com/products");
};

export const getSingleProduct = async (id) => {
    return axios.get(`https://fakestoreapi.com/products/${id}`);
}
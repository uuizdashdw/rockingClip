import axios from 'axios';

const instance = axios.create({
	baseURL: 'http://localhost:3000',
});

const fetchProductById = async id => {
	const { data } = await instance.get(`/products/${id}`);
	return data;
};

const fetchProductsByKeyword = async keyword => {
	const { data } = await instance.get(`/products`, {
		params: {
			q: keyword,
		},
	});

	return data;
};

const createCartItem = async cartItem => {
	return await instance.post('/carts', cartItem);
};

const fetchCartItems = async () => {
	const { data } = await instance.get('/carts');
	return data;
};

export {
	fetchProductById,
	fetchProductsByKeyword,
	createCartItem,
	fetchCartItems,
};

// import { fetchCartItems } from '~/api';

// export default eventHandler(async (req, res) => {
// 	console.log('### 서버미들웨어 실행');
// 	try {
// 		const cartItems = await fetchCartItems();
// 		const modifiedItems = cartItems.map(item => ({
// 			...item,
// 			imageUrl: `${item.imageUrl}?random=${Math.random()}`,
// 		}));

// 		console.log('### 서버 미들웨어 성공적 :: ', modifiedItems);
// 		return modifiedItems;
// 	} catch (err) {
// 		console.error('ERROR :: ', err);
// 		res.statusCode = 500;
// 		return { error: 'Failded to fetch Cart Items' };
// 	}
// });

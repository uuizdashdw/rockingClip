import { collection, getDocs } from 'firebase/firestore';
import { useNuxtApp } from 'nuxt/app';

export const getUsers = async () => {
	const { $db } = useNuxtApp();
	const users: any[] = []; // 유저 목록을 저장할 배열
	const querySnapshot = await getDocs(collection($db, 'userList'));

	querySnapshot.forEach(doc => {
		// users.push({ id: doc.id, ...doc.data() });
		// console.log('## user ==> ', users);
		const data = doc.data();
		if (data.users) {
			users.push(...data.users);
		}
	});
	return users;
};

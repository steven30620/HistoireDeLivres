import { createRouter, createWebHashHistory } from 'vue-router';
import LoginView from '../views/LoginView.vue';
import BooksView from '../views/BooksView.vue';
import AddBookView from '../views/AddBookView.vue';

const routes = [
	{
		path: '/',
		name: 'login',
		component: LoginView,
	},
	{
		path: '/books',
		name: 'books',
		component: BooksView,
	},
	{
		path: '/addBook',
		name: 'addBook',
		component: AddBookView,
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

router.beforeEach((to, from, next) => {
	const token = localStorage.getItem('jwt');

	if (to.name === 'books' && token) {
		console.log('tu peux y allez connecter');
		next();
	} else {
		console.log("vasy mais t'epas co ");
		next();
	}
});

export default router;

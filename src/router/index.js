import { createRouter, createWebHistory } from 'vue-router';
import Home from '../view/Home.vue';
import About from '../view/About.vue';
import Visite from '../view/Visite.vue';
import FAQ from '../view/FAQ.vue';
import Contact from '../view/Contact.vue';
import prova from '../view/prova.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/About', name: 'About', component: About },
  { path: '/visite', name: 'Visite', component: Visite },
  { path: '/faq', name: 'FAQ', component: FAQ },
  { path: '/contatti', name: 'Contact', component: Contact },
  { path: '/prova', name: 'prova', component: prova }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

import { createRouter, createWebHistory } from 'vue-router';
import About from '../view/About.vue';
import Visite from '../view/Visite.vue';
import FAQ from '../view/FAQ.vue';
import Contact from '../view/Contact.vue';
import home2  from '../view/home2.vue';

const routes = [
  { path: '/', name: 'home2', component: home2 },
  { path: '/About', name: 'About', component: About },
  { path: '/visite', name: 'Visite', component: Visite },
  { path: '/faq', name: 'FAQ', component: FAQ },
  { path: '/contatti', name: 'Contact', component: Contact },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

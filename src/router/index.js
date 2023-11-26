import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Matter from '../views/Matter.vue';
import Tryout from '../views/Tryout.vue';
import Question from '../views/Question.vue';
import MatterDetail from '../views/MatterDetail.vue';
import TryoutResult from '../views/TryoutResult.vue';
import Profile from '../views/Profile.vue';
import Evaluation from '../views/Evaluation.vue';
import Register from '../views/Register.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/matter',
      name: 'matter',
      component: Matter
    },
    {
      path: '/matter/matter-detail',
      name: 'matter detail',
      component: MatterDetail
    },
    {
      path: '/tryout',
      name: 'tryout',
      component: Tryout
    },
    {
      path: '/tryout/questions',
      name: 'tryout questions',
      component: Question
    },
    {
      path: '/tryout/results',
      name: 'tryout results',
      component: TryoutResult
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/evaluation',
      name: 'evaluation',
      component: Evaluation
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    }
  ]
})

export default router

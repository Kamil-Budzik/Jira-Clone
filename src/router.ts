import { createRouter, createWebHashHistory } from 'vue-router';
import { getAuth } from 'firebase/auth';
import Board from './views/Board.vue';
import Timeline from './views/Timeline.vue';
import Chat from './views/Chat.vue';
import Files from './views/Files.vue';
import Settings from './views/Settings.vue';
import Tasks from './views/Tasks.vue';
import Register from './views/Register.vue';
import SignIn from './views/SignIn.vue';

export enum LINKS {
  BOARD = '/board',
  TIMELINE = '/timeline',
  CHAT = '/chat',
  FILES = '/files',
  SETTINGS = '/settings',
  TASKS = '/tasks',
  REGISTER = '/register',
  SIGN_IN = '/sign-in',
  DEFAULT = '/',
}

const routes = [
  { path: LINKS.REGISTER, component: Register },
  { path: LINKS.SIGN_IN, component: SignIn },
  { path: LINKS.BOARD, component: Board, meta: { requiresAuth: true } },
  { path: LINKS.TIMELINE, component: Timeline, meta: { requiresAuth: true } },
  { path: LINKS.CHAT, component: Chat, meta: { requiresAuth: true } },
  { path: LINKS.FILES, component: Files, meta: { requiresAuth: true } },
  { path: LINKS.SETTINGS, component: Settings, meta: { requiresAuth: true } },
  { path: LINKS.TASKS, component: Tasks, meta: { requiresAuth: true } },
  {
    path: LINKS.DEFAULT,
    redirect: LINKS.SIGN_IN,
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (await getAuth().currentUser) {
      next();
    } else {
      console.log('You dont have access!');
      next(LINKS.SIGN_IN);
    }
  } else {
    next();
  }
});

export default router;

import { createRouter, createWebHashHistory } from 'vue-router';
import Board from './views/Board.vue';
import Timeline from './views/Timeline.vue';
import Chat from './views/Chat.vue';
import Files from './views/Files.vue';
import Settings from './views/Settings.vue';
import Tasks from './views/Tasks.vue';

export enum LINKS {
  BOARD = '/board',
  TIMELINE = '/timeline',
  CHAT = '/chat',
  FILES = '/files',
  SETTINGS = '/settings',
  TASKS = '/tasks',
  DEFAULT = '/',
}

const routes = [
  { path: LINKS.BOARD, component: Board },
  { path: LINKS.TIMELINE, component: Timeline },
  { path: LINKS.CHAT, component: Chat },
  { path: LINKS.FILES, component: Files },
  { path: LINKS.SETTINGS, component: Settings },
  { path: LINKS.TASKS, component: Tasks },
  { path: LINKS.DEFAULT, redirect: '/board' },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

export default router;

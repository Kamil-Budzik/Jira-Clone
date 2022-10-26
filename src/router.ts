import { createRouter, createWebHashHistory } from 'vue-router';
import Board from './views/Board.vue';
import Timeline from './views/Timeline.vue';
import Chat from './views/Chat.vue';
import Files from './views/Files.vue';
import Settings from './views/Settings.vue';
import Tasks from './views/Tasks.vue';

const routes = [
  { path: '/board', component: Board },
  { path: '/timeline', component: Timeline },
  { path: '/chat', component: Chat },
  { path: '/files', component: Files },
  { path: '/settings', component: Settings },
  { path: '/tasks', component: Tasks },
  { path: '/', redirect: '/board' },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

export default router;

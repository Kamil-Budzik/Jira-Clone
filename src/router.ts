import MarketingPlan from './views/MarketingPlan.vue';
import PlatformLaunch from './views/PlatformLaunch.vue';
import Roadmap from './views/Roadmap.vue';
import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  { path: '/', component: PlatformLaunch },
  { path: '/marketing-plan', component: MarketingPlan },
  { path: '/roadmap', component: Roadmap },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

export default router;

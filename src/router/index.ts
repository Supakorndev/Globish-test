import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
import PersonalityTest from "../pages/PersonalityTest.vue";
import StartPage from "../pages/StartPage.vue";
import ChannelPage from "../pages/ChannelPage.vue";
import ResultPage from "../pages/ResultPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: StartPage,
  },
  {
    path: "/question",
    name: "Question",
    component: PersonalityTest,
  },
  {
    path: "/channel",
    name: "Channel",
    component: ChannelPage,
  },
  {
    path: "/result",
    name: "Result",
    component: ResultPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SignalView from "../views/SignalView.vue";
import BlogView from "../views/BlogView.vue";
import Developers from "../views/DevelopersView.vue";
import Careers from "../views/CareersView.vue";
import Donate from "../views/DonateView.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/download",
    name: "download",
    component: SignalView,
    methods: {
      scrollToTop() {
        window.scrollTo(0, 0);
      },
    },
  },
  {
    path: "/blog",
    name: "blog",
    component: BlogView,
    methods: {
      scrollToTop() {
        window.scrollTo(0, 0);
      },
    },
  },
  {
    path: "/docs",
    name: "developers",
    component: Developers,
    methods: {
      scrollToTop() {
        window.scrollTo(0, 0);
      },
    },
  },
  {
    path: "/workworkwork",
    name: "careers",
    component: Careers,
    methods: {
      scrollToTop() {
        window.scrollTo(0, 0);
      },
    },
  },
  {
    path: "/donate",
    name: "donate",
    component: Donate,
    methods: {
      scrollToTop() {
        window.scrollTo(0, 0);
      },
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

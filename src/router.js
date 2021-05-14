import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home";
import About from "./views/About";
import Test from "./views/Test"

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: [{
        path: "/",
        component: Home
    },
    {
        path: "/about",
        component: About
    },
    {
        path: "/Test",
        component: Test
    }]
});

export default router
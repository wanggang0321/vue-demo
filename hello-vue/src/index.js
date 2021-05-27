
// 使用es6的语法导入js模块
import Vue from '../node_modules/vue/dist/vue';
import VueRouter from "../node_modules/vue-router/dist/vue-router";
import loginForm from "./js/login";
import registerForm from "./js/register";
import './css/main.css';

Vue.use(VueRouter); // vue-router使用模块化加载后，必须增加一句：Vue.use(VueRouter)

const router = new VueRouter({
    routes: [ // 编写路由规则
        // path: 路由请求路径；component：组件名称
        {path: "/login", component: loginForm},
        {path: "/register", component: registerForm}
    ]
});
var vm = new Vue({
    el:"#app",
    components: {
        loginForm, // 当key和value一样时，可以只写一个
        registerForm
    },
    router // 引用上面定义的router对象
})

import { createApp } from 'vue';
import App from './App.vue';
import {createRouter, createWebHistory} from 'vue-router';
import BaseModal from './components/BaseModal.vue';
import AllUsers from './pages/AllUsers.vue';
import CourseGoals from './pages/CourseGoals.vue';

const app = createApp(App);

const router= createRouter({
    history: createWebHistory(),
    routes:[
        {
            path:'/',component: AllUsers},
        {path:'/goals',component: CourseGoals}
    ]
})


app.component('base-modal', BaseModal);
app.use(router);
router.isReady().then (
    function(){
        app.mount('#app');


    }
);

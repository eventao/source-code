/**
 * Created by forli on 2017/3/9.
 */
(function(){

    const router = new VueRouter({
        routes:[
            {
                path: '/',
                component: HomeComponent
            },
            {
                path: '/taken-card',
                component: TakenCardComponent
            },
            {
                path:'/card-pay',
                component:CardPay
            },
            {
                path:'/card-record',
                component:CardRecord
            }
        ]
    });
    let app = new Vue({
        router
    }).$mount('#app');

})();
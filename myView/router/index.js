var routes=[
    { path:"/", redirect:"/main"},
    { path:"/dataList", componment:dataList},
    { path:"/main", component:main}
]


var router = new VueRouter({
    routes:routes
});
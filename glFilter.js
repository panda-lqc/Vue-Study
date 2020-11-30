Vue.filter("price",function (params,...params2) {
    // console.log(params);
    return params.toFixed(params2[0]);
})
Vue.filter("addText",function (params,text) {
    return text + params; 
});
Vue.filter("timeHelper",function (value,formatter) {
    return new TimeHelper(value).toString(formatter);
})
// timeTranslate = function (g,fun) {
//     g.timeTrans = fun();
// }
// timeTranslate(this,function() {
//     function hooks() {
//         //console.log(arguments);
//         return new TimeHelper(arguments[0]);
//     }
//     function TimeHelper(date){
//         if (date instanceof Date == false) {
//             throw new Error("type is not Date")
//         }
    
//         this._date = new Date(date);
//     }
//     TimeHelper.prototype.toString = toString

//     function toString(date,formatter) {
//         var res = formatter.replace("yyyy",date.getFillyear())
//                     .replace("MM",date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1)
//                     .replace("dd",date.getDate() < 10 ? "0" + date.getDate() : date.getDate())
//                     .replace("HH",date.getHours() < 10 ? "0" + date.getHours() : date.getHours())
//                     .replace("mm",date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes())
//                     .replace("ss",date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds());
//         // console.log(res);
//         return res;
//     }
//     return hooks;
// })

(function (g,fun) {
    g.timeTrans = fun();
})(this,function() {
    function hooks() {
        //console.log(arguments);
        return new TimeHelper(arguments[0]);
    }
    function TimeHelper(date){
        if (date instanceof Date == false) {
            throw new Error("type is not Date")
        }
    
        this._date = new Date(date);
    }
    TimeHelper.prototype.toString = toString

    function toString(formatter) {
        var date = this._date;
        var res = formatter.replace("yyyy",date.getFullYear())
                    .replace("MM",date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1)
                    .replace("dd",date.getDate() < 10 ? "0" + date.getDate() : date.getDate())
                    .replace("HH",date.getHours() < 10 ? "0" + date.getHours() : date.getHours())
                    .replace("mm",date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes())
                    .replace("ss",date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds());
        // console.log(res);
        return res;
    }
    return hooks;
})

// Date.prototype.toString = toString;
// function toString(formatter) {
//     var date = this;
//     if  (date instanceof Date == false) return;
//     var res = formatter.replace("yyyy",date.getFillyear())
//                 .replace("MM",date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1)
//                 .replace("dd",date.getDate() < 10 ? "0" + date.getDate() : date.getDate())
//                 .replace("HH",date.getHours() < 10 ? "0" + date.getHours() : date.getHours())
//                 .replace("mm",date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes())
//                 .replace("ss",date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds());
//     // console.log(res);
//     return res;
// }





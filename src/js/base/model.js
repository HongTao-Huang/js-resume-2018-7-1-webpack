// window.Model = function (options) {
//     let resourceName = options.resourceName;
//     return {
//         init : function(){
//             let APP_ID = 'Od7Bd3gkNYWSgfwPaFUh2m0j-gzGzoHsz';
//             let APP_KEY = '8KIkSeoNSMheHVhmossNbGGK';
//             AV.init({appId: APP_ID, appKey: APP_KEY});
//         },
//         save : function(object){
//             let Class = AV.Object.extend(resourceName);
//             let leanclass = new Class();
//             return leanclass.save(object);
//         },
//         fetch : function(){
//             let query = new AV.Query(resourceName);
//             return query.find();
//         }
//     }
// }

export class Model {
    constructor(options){
        this.resourceName = options.resourceName;
    }
    init() {
        let APP_ID = 'Od7Bd3gkNYWSgfwPaFUh2m0j-gzGzoHsz';
        let APP_KEY = '8KIkSeoNSMheHVhmossNbGGK';
        AV.init({appId: APP_ID, appKey: APP_KEY});
    }
    save(object) {
        let Class = AV.Object.extend(this.resourceName);
        let leanclass = new Class();
        return leanclass.save(object);
    }
    fetch() {
        let query = new AV.Query(this.resourceName);
        return query.find();
    }
}

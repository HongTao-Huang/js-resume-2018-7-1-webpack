/*  var view = View('.xxx)     */
// window.View = function (selector) {
//     return document.querySelector(selector);
// }

export class View {
    constructor(selector){
        return document.querySelector(selector);
    }
}
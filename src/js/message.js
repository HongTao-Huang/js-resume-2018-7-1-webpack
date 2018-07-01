import { View } from './base/view.js'
import { Model } from './base/Model.js'
import { Controller } from './base/Controller.js'

export function messsage() {
    var view = new View('#siteMessage');

    var model = new Model({'resourceName' : 'Message'})

    var controller = new Controller({
        messageList: null,
        form: null,
        init : function(view , model){
            this.messageList = document.querySelector('#messageList');
            this.form = document.querySelector('#messageForm');
            this.loadfetch();
        },
        addLi : function(eventAttributes){
            let li = document.createElement('li');
            li.innerText = `${eventAttributes.name}:${eventAttributes.content}`;
            this.messageList.appendChild(li);
        }
        ,
        saveObject : function(){
            let content = this.form.querySelector(`input[name = 'content']`).value;
            let name = this.form.querySelector(`input[name = 'name']`).value;
            this.model.save( {'name' : name , 'content' : content})
                .then((e)=>{
                    this.addLi(e.attributes);
                    this.form.querySelector(`input[name = 'content']`).value = '';
                    this.form.querySelector(`input[name = 'name']`).value = '';
                });
        },
        loadfetch : function(){
            this.model.fetch().then( (items)=> {
                let array = items.map((item)=> item.attributes);
                array.forEach((item) => {
                    this.addLi(item);
                });
            })
        },
        bindEvents : function(){
            this.form.addEventListener('submit',(e)=>{
                e.preventDefault();
                this.saveObject();
            })
        }
    })

    controller.init.call(controller,view ,model);
}




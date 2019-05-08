
Vue.component('todo-item', {
    // This component is a <li> that is passed into the view app
    // and uses $emit to pass an event back to the parent.
    // It's registered globally in the app and can be acceessed by any Vue instance
    template: `<li>{{todo.text}} <button v-on:click="$emit('delete-item')">{{buttonText}}</button></li>`,
    props: ['todo'],
    data: function () {
        return {
            buttonText: 'delete'
        }
    }
})

var app = new Vue({
  el: '#app',
  data: {
    todoList: [],
    todoItem: '',
    id: 0
  },
  methods: {
    addItem: function () {
        this.id++
        this.todoList.push({id: this.id, text: this.todoItem})
        this.todoItem = ''
    },
    deleteItem: function (itemId) {
        this.todoList = this.todoList.filter( i => i.id !== itemId )
    }
  }
})



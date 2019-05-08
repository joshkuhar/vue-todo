
Vue.component('todo-item', {
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



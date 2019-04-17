let data = {
    name: 'billy bob',
    foos: [
      {id: 1, text: 'hahahaha cough'},
      {id: 2, text: 'bip bip bip'},
      {id: 3, text: 'bop bop bop'}
    ]
}

var todoComp = Vue.component('todo-item', {
    template: '<li>{{todo.text}}</li>',
    props: ['todo']
})

var app = new Vue({
  el: '#app',
  data: {
    todoList: data.foos,
    name: data.name,
    todoItem: '',
    message: ''
  },
  methods: {
    addItemToList: function () {
        this.todoList.push({text: 'oh my gawd'})
    },
    deleteItem: function() {
        let newTodoList = this.todoList.map(function(i){
            return i
        })
        newTodoList.pop()
        this.todoList = newTodoList    
    }
  },
  components: {
    todoComp: todoComp
  }
})


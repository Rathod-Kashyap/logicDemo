import {action, computed, makeObservable, observable} from 'mobx';
import {filter} from 'lodash';
import {create, persist} from 'mobx-persist';
import {AsyncStorage} from 'react-native';

class TodoStore {
  @observable idForTodo = 3;
  @persist('list') @observable todos = [
    {
      id: 1,
      title: 'Todo 1',
      completed: false,
    },
    {
      id: 2,
      title: 'Todo 2',
      completed: false,
    },
  ];

  constructor() {
    makeObservable(this);
  }

  @action getData = () => {
    if (this.todos !== null) {
      return this.todos;
    }
  };

  @action addTodo = todoInput => {
    this.idForTodo++;
    this.todos.push({
      id: new Date().getMilliseconds() * Math.random(),
      title: todoInput.trim(),
      completed: false,
    });
  };

  @action deleteTodo = id => {
    const index = this.todos.findIndex(item => item.id === id);
    this.todos.splice(index, 1);
  };

  @action editTodo = (text, id) => {
    const index = this.todos.findIndex(item => item.id === id);
    this.todos[index].title = text;
    // this.todos.splice(index, 1, obj);
  };

  @action checkTodo = todo => {
    //console.log(val);
    todo.completed = !todo.completed;
    const index = this.todos.findIndex(item => item.id === todo.id);
    this.todos.splice(index, 1, todo);
  };

  @action checkAllTodos = (value = true) => {
    this.todos.forEach(todo => (todo.completed = value));
  };

  @computed get todosCompletedCount() {
    return filter(this.todos, val => val.completed).length;
  }

  @computed get remaining() {
    return filter(this.todos, val => !val.completed).length;
  }
}

const toDoStore = new TodoStore();

const hydrate = create({
  storage: AsyncStorage,
  jsonify: true,
});

export default toDoStore;
hydrate('todo', toDoStore).then(() => console.log('Todo Hydrated'));

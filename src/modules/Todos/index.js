import React, {Component} from 'react';
import {
  Text,
  Button,
  View,
  HStack,
  VStack,
  Modal,
  Spacer,
  FormControl,
  Input,
} from 'native-base';
import {inject, observer} from 'mobx-react';
import todoStore from '../Storage/TodoStore';
import {FlatList} from 'react-native';
import {_Text} from 'react-native';
import {ScrollView} from 'react-native';
import {Header} from 'react-native/Libraries/NewAppScreen';
import {filter, isEmpty} from 'lodash';
import {ToastAndroid} from 'react-native';
import {action, makeObservable, observable} from 'mobx';

@inject('toDoStore')
@observer
export default class HomeTodo extends Component {
  @observable selected = undefined;
  @observable todo = '';
  @observable edit = false;
  constructor(props) {
    super(props);
    makeObservable(this);
  }
  state = {
    text: '',
    modalVisible: false,
    TodoModalVisible: false,
  };

  componentDidMount() {
    // console.log('comM', this.props);
    const {toDoStore} = this.props;
    todoStore.getData();
    // console.log(todoStore.getData());
  }

  @action
  setTodo = name => {
    this.todo = name;
  };

  onChangeText = text => {
    if (text && !!text) {
      this.setTodo(text);
    }
  };

  handleCheck = id => {
    const {toDoStore} = this.props;
    const [arr] = toDoStore.todos.filter(e => e.id == id);
    toDoStore.checkTodo(arr);
  };

  @action setSelectedObj = obj => {
    this.selected = obj;
    this.edit = true;
  };

  editTodo = obj => {
    const {toDoStore} = this.props;
    this.setSelectedObj(obj);
    this.setTodo(obj.title);
    // todoStore.editTodo(obj);
  };

  @action addTodo = () => {
    if (!isEmpty(this.todo) && !this.edit) {
      const {toDoStore} = this.props;
      todoStore.addTodo(this.todo);
      this.setTodo('');
    } else if (this.edit) {
      todoStore.editTodo(this.todo, this.selected.id);
      this.edit = false;
      this.todo = '';
    } else {
      return ToastAndroid.show('Enter Todo', ToastAndroid.SHORT);
    }
  };

  deleteTodo = id => {
    const {toDoStore} = this.props;
    toDoStore.deleteTodo(id);
  };

  openModal = () => {
    return (
      <Modal
        avoidKeyboard
        isOpen={this.state.modalVisible}
        onClose={() => {
          this.setState({modalVisible: false});
        }}
        justifyContent={'center'}>
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>Enter Detail</Modal.Header>
          <Modal.Body>
            <FormControl isRequired>
              <FormControl.Label>Todos</FormControl.Label>
              <Input
                placeholder="Todos"
                onChangeText={name => this.onChangeText(name)}
              />
            </FormControl>
            <Modal.Footer>
              <Button onPress={() => this.addTodo()}>Add Todo</Button>
            </Modal.Footer>
          </Modal.Body>
        </Modal.Content>
      </Modal>
    );
  };

  render() {
    // console.log('todo', this.props);
    const {todos = [], todosCompletedCount, remaining} = this.props.toDoStore;
    const {text} = this.state.text;

    return (
      <>
        <this.openModal />
        <ScrollView>
          <Text alignSelf={'center'} marginTop={'10'} fontWeight={'extrabold'}>
            Checked:{todosCompletedCount}
          </Text>
          <HStack flex={1} alignSelf={'center'} mx={'2'}>
            <Input
              w={'2xs'}
              px={'2'}
              placeholder="Todos"
              value={this.todo}
              onChangeText={name => {
                this.onChangeText(name);
              }}
            />
            <Button mx={'2'} onPress={() => this.addTodo()}>
              {this.edit ? 'Edit Todo' : 'Add Todo'}
            </Button>
          </HStack>
          {todos.map(obj => {
            obj.completed ? (sk = true) : (sk = false);
            return (
              <View>
                <HStack
                  justifyContent={'space-around'}
                  pt={10}
                  _dark={{color: 'white'}}>
                  <Text
                    strikeThrough={sk}
                    onChangeText={t => this.setState({text: t})}>
                    {obj.title}
                  </Text>
                  <HStack>
                    <Button
                      h={'10'}
                      w={'20'}
                      mx={'2'}
                      onPress={() => this.handleCheck(obj.id)}>
                      {obj.completed ? 'Uncheck' : 'Check'}
                    </Button>
                    <Button
                      h={'10'}
                      w={'20'}
                      mx={'2'}
                      onPress={() => this.deleteTodo(obj.id)}>
                      Delete
                    </Button>
                    <Button
                      h={'10'}
                      w={'20'}
                      mx={'2'}
                      onPress={() => {
                        this.editTodo(obj);
                      }}>
                      Edit
                    </Button>
                  </HStack>
                </HStack>
                <Spacer />
              </View>
            );
          })}
        </ScrollView>
        {/* <Button
          h={'10'}
          w={'20'}
          alignSelf="center"
          onPress={() =>
            this.setState({modalVisible: !this.state.modalVisible})
          }>
          Add
        </Button> */}
      </>
    );
  }
}

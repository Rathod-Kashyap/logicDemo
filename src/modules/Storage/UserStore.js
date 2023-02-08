import {isEmpty} from 'lodash';
import {action, computed, makeObservable, observable} from 'mobx';
import {create, persist} from 'mobx-persist';
import {AsyncStorage} from 'react-native';

class UserStore {
  @persist @observable email = '';
  @persist @observable Password = '';

  constructor() {
    makeObservable(this);
  }

  @action updateData(email, pass) {
    console.log('email', email, 'pass', pass);
    this.email = email;
    this.Password = pass;
  }

  @action getEmail() {
    if (!isEmpty(this.email)) {
      return this.email;
    }
  }
  @action getPass() {
    if (!isEmpty(this.Password)) {
      return this.Password;
    }
  }
}

const userStore = new UserStore();

const hydrate = create({
  storage: AsyncStorage,
  jsonify: true,
});

export default userStore;
hydrate('userStore', userStore)
  .then(() => console.log('User Hydrated'))
  .catch(e => console.log('User error', e));

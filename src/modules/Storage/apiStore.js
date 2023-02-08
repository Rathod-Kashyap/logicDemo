import {action, computed, makeObservable, observable} from 'mobx';
import {create, persist} from 'mobx-persist';
import {AsyncStorage} from 'react-native';

class apiStore {
  @persist @observable refresh = false;
  @persist('list') @observable data = [];

  constructor() {
    makeObservable(this);
  }

  @action setData(d) {
    console.log('got data');
    this.data = d;
  }
  @action setRefresh(d) {
    this.refresh = d;
  }
  @computed get getD() {
    return this.data;
  }
  @computed get getRefresh() {
    return this.refresh;
  }
}

const apistore = new apiStore();

const hydrate = create({
  storage: AsyncStorage,
  jsonify: true,
});
export default apistore;

hydrate('apistore', apistore).then(() => console.log('api hydrate'));

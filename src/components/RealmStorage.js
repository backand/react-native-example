import backand from './../../static/lib/backand'
import Realm from 'realm';

export default class RealmStorage extends backand.helpers.StorageAbstract {
  constructor (props) {
    super(props);
    this.realm = new Realm({schema: [{
      name: 'store',
      primaryKey: 'key',
      properties: {
        key: 'string',
        val: 'string'
      }
    }]});
  }
  setItem (key, val) {
    this.realm.write(() => {
     this.realm.create('store', {key, val}, true);
   });
  }
  getItem (key) {
    let store = this.realm.objects('store').filtered(`key = "${key}"`);
    return store.length === 1 ? store[0].val : null;
  }
  removeItem (key) {
    this.realm.write(() => {
      let store = this.realm.objects('store').filtered(`key = "${key}"`);
      this.realm.delete(store);
    });
  }
  clear () {
    this.realm.write(() => {
      let stores = this.realm.objects('store');
      this.realm.delete(stores);
    });
  }
}

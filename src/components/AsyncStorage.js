import backand from './../../static/lib/backand'
import { AsyncStorage } from 'react-native'

export default class AsyncStoragePolyfill extends backand.helpers.StorageAbstract {
  async setItem (id, val) {
    try {
      const value = await AsyncStorage.setItem(id, val);
      return value;
    } catch (error) {
      return null;
    }
  }
  async getItem (id) {
    try {
      const value = await AsyncStorage.getItem(id);
      console.log(value);
      return value;
    } catch (error) {
      return null;
    }
  }
  async removeItem (id) {
    try {
      const value = await AsyncStorage.removeItem(id);
      return null;
    } catch (error) {
      return null;
    }
  }
  async clear () {
    try {
      const value = await AsyncStorage.clear();
      return {};
    } catch (error) {
      return {};
    }
  }
}

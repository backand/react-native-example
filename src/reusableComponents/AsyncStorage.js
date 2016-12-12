import { AsyncStorage } from 'react-native';

export class AsyncStorage  {
  constructor() { }
  setItem (id, val) {
    try {
      return await AsyncStorage.setItem(id, val);
    } catch () {
      return null;
    }
  }
  getItem (id) {
    try {
      return await AsyncStorage.getItem(id);
    } catch () {
      return null;
    }
  }
  removeItem (id) {
    try {
      await AsyncStorage.removeItem(id);
    } catch () {
      return null;
    }
    return null;
  }
  clear () {
    try {
      return await AsyncStorage.clear();
    } catch () {
      return {};
    }
    return {};
  }
}

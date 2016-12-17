import backand from './../../static/lib/backand'

export default function MemoryStorage () {
  backand.helpers.StorageAbstract.call(this);
  this.data = {};
}
MemoryStorage.prototype = Object.create(backand.helpers.StorageAbstract.prototype);
MemoryStorage.prototype.constructor = MemoryStorage;
MemoryStorage.prototype.setItem = function (id, val) {
  return this.data[id] = String(val);
}
MemoryStorage.prototype.getItem = function (id) {
  return this.data.hasOwnProperty(id) ? this.data[id] : null;
}
MemoryStorage.prototype.removeItem = function (id) {
  delete this.data[id];
  return null;
}
MemoryStorage.prototype.clear = function() {
  return this.data = {};
}

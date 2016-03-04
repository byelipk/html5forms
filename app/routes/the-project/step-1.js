import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    next() {
      alert("Hello world!");
    }
  }
});

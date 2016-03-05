import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    next() {
      this.transitionTo('the-project.step-3');
    }
  }
});

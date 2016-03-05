import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('account');
  },

  actions: {
    next(account) {
      const { validations } = account.validateSync();

      if (validations.get('isValid')) {
        this.transitionTo('the-project.step-2');
      } else {
        alert("Oh no something is not right!");
      }
    }
  }
});

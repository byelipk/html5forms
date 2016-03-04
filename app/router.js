import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('the-basics');
  this.route('the-project', function() {
    this.route('step-1', { path: '/' });
    this.route('step-2');
    this.route('step-3');
  });
});

export default Router;

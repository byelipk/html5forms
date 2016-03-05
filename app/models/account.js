import DS from 'ember-data';
import Validations from '../validations/account';

export default DS.Model.extend(Validations, {
  name:     DS.attr('string'),
  email:    DS.attr('string'),
  password: DS.attr('string')
});

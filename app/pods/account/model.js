import DS from 'ember-data';
import { validator, buildValidations } from 'ember-cp-validations';
import { memberAction, collectionAction } from 'ember-api-actions';

let Validations = buildValidations({
  name: [
    validator('presence', true)
  ],
  email: [
    validator('presence', true),
    validator('format', {
      type: 'email'
    })
  ],
  password: [
    validator('presence', true),
    validator('length', {
      min: 8
    })
  ]
});

export default DS.Model.extend(Validations, {
  name:     DS.attr('string'),
  email:    DS.attr('string'),
  password: DS.attr('string'),

  freeze:   memberAction({ path: 'freeze' }),
  unfreeze: collectionAction({ path: 'unfreeze' })
});

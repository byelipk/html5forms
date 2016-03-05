import Mirage, { faker } from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  name: `${faker.name.firstName} ${faker.name.lastName}`,
  email: faker.internet.email,
  password: 'secretpassword'
});

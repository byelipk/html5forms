import ApplicationAdapter from '../application/adapter';

export default ApplicationAdapter.extend({
  ajax(url, type, options) {
    if (url.match(/\/freeze/)) {
      type = 'POST';
    }

    return this._super(url, type, options);
  }
});

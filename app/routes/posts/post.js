// Route: posts/post
// URL:   posts/:id

import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.find('post', params.id);
  }
});

import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('posts', { path: '/' }, function() {
    this.route('post', { path: 'posts/:id' });
    this.route('new', { path: '/posts/new' });
  });
});

export default Router;

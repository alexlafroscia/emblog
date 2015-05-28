import Ember from 'ember';

export default Ember.Component.extend({

  classNames: ['post-item'],

  // Attributes
  title: Ember.computed.oneWay('post.title'),
  body: Ember.computed.oneWay('post.snippet'),

  click() {
    const post = this.get('post');
    this.sendAction('action', post);
  }
});

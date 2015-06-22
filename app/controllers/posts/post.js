// Controller: posts/post
import Ember from 'ember';
const { alias } = Ember.computed;

export default Ember.Controller.extend({

  title: alias('model.title'),

  body: alias('model.body')

});

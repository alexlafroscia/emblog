import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({

  title: DS.attr('string'),
  body: DS.attr('string'),

  snippet: Ember.computed('body', function() {
    return `${this.get('body').substring(0, 400)}...`;
  })
});

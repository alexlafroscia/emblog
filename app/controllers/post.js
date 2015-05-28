import Ember from 'ember';

export default Ember.Controller.extend({
  editing: false,

  actions: {
    toggleEditing() {
      this.toggleProperty('editing');
    }
  }
});

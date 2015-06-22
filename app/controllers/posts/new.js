import Ember from 'ember';

export default Ember.Controller.extend({
  /**
   * New Post Title
   */
  title: null,

  /**
   * New Post Body
   */
  body: null,

  /**
   * Errors
   */
  errors: {
    title: null,
    body: null
  },

  resetErrors() {
    this.set('errors', {
      title: null,
      body: null
    });
  },

  resetFields() {
    this.set('title', null);
    this.set('body', null);
  },

  actions: {

    /**
     * Save a new post
     */
    save() {
      this.resetErrors();

      // Get the properties from the controller
      const title = this.get('title');
      const body = this.get('body');

      // Validation
      if (Ember.isEmpty(title)) {
        this.set('errors.title', 'Title is empty!');
      }
      if (Ember.isEmpty(body)) {
        this.set('errors.body', 'Body is empty!');
      }
      if (Ember.isEmpty(title) || Ember.isEmpty(body)) {
        return;
      }

      // Create a new `post` using the new values
      const post = this.store.createRecord('post', {
        title,
        body
      });

      // Save the new post, which returns a promise for error handling
      post.save()
      .then(() => {
        // Happy path
        this.resetFields();
        this.resetErrors();
        this.transitionTo('posts.post', post);
      })
      .catch(() => {
        // Sad path
      });
    },

    resetTitleError() {
      this.set('errors.title', null);
    },

    resetBodyError() {
      this.set('errors.body', null);
    }

  }
});

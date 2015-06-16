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

  actions: {

    /**
     * Save a new post
     */
    save() {
      // Get the properties from the controller
      const title = this.get('title');
      const body = this.get('title');

      // Do some sort of validation...

      // Create a new `post` using the new values
      const post = this.store.createRecord('post', {
        title,
        body
      });

      // Save the new post, which returns a promise for error handling
      post.save()
      .then(() => {
        this.set('title', null);
        this.set('body', null);
        this.transitionTo('posts.post', post);
      })
      .catch(() => {
        // Handle error state
      });
    }
  }
});

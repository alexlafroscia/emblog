import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'emblog/tests/helpers/start-app';

var application;

module('Acceptance | posts/new', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting /posts/new', function(assert) {
  visit('/posts/new');

  andThen(function() {
    assert.equal(currentURL(), '/posts/new');
  });
});

test('page contains form', function(assert) {
  assert.expect(1);

  visit('/posts/new');

  andThen(function() {
    const form = find('form'); // Find a <form> on the page
    assert.ok(form, 'Page has a form element');
  });

});

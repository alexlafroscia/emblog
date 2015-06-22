import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('my-post', 'Unit | Component | my post', {
  needs: ['helper:mark-down'],
  unit: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Creates the component instance
  var component = this.subject();
  assert.equal(component._state, 'preRender');

  // Renders the component to the page
  this.render();
  assert.equal(component._state, 'inDOM');
});

test('it has a title', function(assert) {
  assert.expect(1);

  var component = this.subject({
    postTitle: 'This is the title'
  });

  assert.equal(this.$('h1').html(), 'This is the title', 'Post has correct title');
});

test('it has the body', function(assert) {
  assert.expect(1);

  var component = this.subject({
    postBody: 'This is the body'
  });

  assert.equal(this.$('p').html(), 'This is the body', 'Post has correct body');
});

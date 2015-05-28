import Ember from 'ember';

export function markDown(params) {
  const content = params[0];
  return Ember.String.htmlSafe(marked(content));
}

export default Ember.HTMLBars.makeBoundHelper(markDown);

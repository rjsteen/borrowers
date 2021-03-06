import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['show'],
  possibleStates: ['borrowed', 'returned'],
  contentDidChange: function() {
    console.log("Called when we add or removed an article.");
  }.observes('model.[]'),
  stateDidChange: function() {
    console.log("Called when the state property change for any of the articles.");
  }.observes('model.@each.state')
});

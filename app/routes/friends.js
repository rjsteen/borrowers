import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    save: function() {
      console.log('+--- save action bubbled up to friends route');
      return false;
    },
    cancel: function() {
      console.log('+--- cancel action bubbled up to friends route');
      return false;
    },
    delete: function(friend) {
      var _this = this;
      friend.destroyRecord().then(function(){
        _this.transitionTo('friends.index');
      });
    }
  }
});

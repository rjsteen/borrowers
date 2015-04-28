import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tr',
  article: null, //passed in
  articleStates: null, //passed in
  autoSave: function() {
    var article = this.get('article'); 
    if (!article.get('isNew')) {
      this.sendAction('save', article); 
    }
  },
  stateChanged: function() {
    if(this.get('model.isDirty') && !this.get('model.isSaving')) {
      Ember.run.once(this, this.autoSave);
    }
  }.on('init').observes('model.state')
});

import Ember from 'ember';
import {
  module,
  test
} from 'qunit';
import startApp from '../../helpers/start-app';

var application;

module('Acceptance: FriendsNew', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting /friends/new', function(assert) {
  visit('/friends/new');

  andThen(function() {
    assert.equal(currentPath(), 'friends.new');
  });
});

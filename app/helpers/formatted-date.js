import Ember from 'ember';

import { formatDate } from '../utils/date-helpers';

export default Ember.HTMLBars.makeBoundHelper(function(date, format) {
  return formatDate(date, format);
});

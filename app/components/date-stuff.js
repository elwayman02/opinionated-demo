import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  today: moment(),
  nextWeek: moment().add(7, 'days'),
  travis: moment().add(5, 'minutes')
});

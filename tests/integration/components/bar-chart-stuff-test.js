import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('bar-chart-stuff', 'Integration | Component | bar chart stuff', {
  integration: true
});

test('it renders', function(assert) {
  
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{bar-chart-stuff}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#bar-chart-stuff}}
      template block text
    {{/bar-chart-stuff}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

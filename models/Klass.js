var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Klass Model
 * ==========
 */

var Klass = new keystone.List('Klass', {
    map: { name: 'title' },
});

Klass.add({
    title: { type: String },
    scheduledDate: { type: Types.Datetime },
    speaker: { type: String },
    location: { type: String },
    content: { type: Types.Text },
});

Klass.defaultColumns = 'title, scheduledDate, speaker, location, content';
Klass.register();

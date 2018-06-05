var keystone = require('keystone');
var Types = keystone.Field.Types;

var ContentSection = new keystone.List('ContentSection', {
	map: { name: 'section' },
	autokey: { from: 'section', path: 'key', unique: true },
});

ContentSection.add({
	section: { type: String, required: true, default: 'Section' },
	subheading: { type: String, required: true, default: 'Subheading' },
	description: { type: String, required: true, default: 'Description' },
	body: { type: Types.Html, wysiwyg: true, default: 'Page body' },
	publishedDate: { type: Date, default: Date.now },
});

ContentSection.register();

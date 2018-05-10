var keystone = require('keystone');
// var Types = keystone.Field.Types;

var RockListing = new keystone.List('RockListing', {
	autokey: { from: 'name', path: 'key', unique: true },
});

RockListing.add({
	title: { type: String, required: true, default: 'a rock' },
	publishedDate: { type: Date, default: Date.now },
	// image: { type: Types.File },
	description: { type: String, required: true, default: 'a rock description' },
});

RockListing.register();

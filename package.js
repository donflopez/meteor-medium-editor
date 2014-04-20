Package.describe({
	name: "donflopez:medium-editor",
	summary: "Add medium-editor and medium insert clone to Meteor client side",
	version: "1.2.0"
});

Package.on_use(function (api) {
	api.add_files(['medium-editor.css','medium-editor.js', 'medium-editor-insert-plugin.all.min.js','medium-editor-insert-plugin.css'], 'client');

	if(api.export)
		api.export('MediumEditor', 'client');
});

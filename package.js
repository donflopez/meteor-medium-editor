Package.describe({
	name: "donflopez:medium-editor",
	summary: "Add medium-editor and medium insert clone to Meteor client side",
	version: "1.1.0"
});

Package.on_use(function (api) {
	api.add_files(['medium-editor.css','medium-editor.min.js', 'medium-editor-insert-plugin.all.min.js', 'medium-editor-insert-plugin.css'], 'client');
});

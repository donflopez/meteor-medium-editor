Package.describe({
	name: "donflopez:medium-editor",
	summary: "Add medium-editor clone to Meteor client side",
	version: "1.0.1"
});

Package.on_use(function (api) {
	api.add_files(['medium-editor.css','medium-editor.min.js'], 'client');
});


module.exports = {
	get: function(key) {
		return JSON.parse(window.localStorage.getItem("freshscript." + key));
	},
	set: function(key, value) {
		window.localStorage.setItem("freshscript." + key, JSON.stringify(value));
	}
};
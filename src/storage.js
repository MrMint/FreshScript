
export default {
	get(key) {
		return JSON.parse(window.localStorage.getItem('freshscript.' + key));
	},
	set(key, value) {
		window.localStorage.setItem('freshscript.' + key, JSON.stringify(value));
	}
};

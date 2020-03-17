import Vue from 'vue';
import MessageBox from './MessageBox';

export var messagebox = (function() {
	var defaults = {
		title: '',
		content: '',
		cancel: '',
		ok: '',
		handleCancel: null,
		handelOk: null

	};

	return function(opts) { //返回配置参数
		for(var attr in opts) {
			defaults[attr] = opts[attr];
		}

		var myComponent = Vue.extend(Messagebox);
		var vm = new MyComponent({
			el: document.createElement('div'),
			data: {
				title: defaults.title,
				content: defaults.content,
				cancel: defaults.cancel,
				ok: defaults.ok
				

			},
			methods: {
				handleCancel() {
					defaults.handleCancel && defaults.handleCancel.bind(this)
					document.body.removeChild(vm.$el)
				},
				handelOk() {
					defaults.handelOk && defaults.handelOk.bind(this)
					document.body.removeChild(vm.$el)
				}
			}
		})
		document.body.appendChild(vm.$el)
	}
})();
Vue.directive('hideable-nav', {
	bind: function (el, binding, vnode) {
		let height = el.offsetHeight;
		// this.vm.linkClass = 'white';
		// this.set('linkClass', 'white');

		window.addEventListener('scroll', (e) => {
			// document.body.offsetWidth > 800 && 
			if (window.scrollY > height) {
				el.classList.add('fixed', 'bg-white', 'black');
				el.classList.remove('white', 'bg-blue');
			} else {
				el.classList.add('white', 'bg-blue');
				el.classList.remove('fixed', 'bg-white', 'black');
			}
		});
	},
});


var app = new Vue({
	el: '#header-nav',
	data: {
		message: 'Hello Vue!'
	}
});

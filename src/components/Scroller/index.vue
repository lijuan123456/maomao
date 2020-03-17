<template>
	<div class="wrapper" ref='wrapper'>
		<slot></slot>
	</div>
</template>

<script>
	import Bscroll from 'better-scroll'
	export default {
		name: 'scoller',
		props: {
			handleToscroll: {
				type: Function,
				default: function() {

				}
			},
			handleTotouchend: {
				type: Function,
				default: function() {

				}
			}

		},
		mounted() {
			var scroll = new Bscroll(this.$refs.wrapper, {
				tap: true,
				probeType: 1

			});
			this.scroll = scroll;

			scroll.on('scroll', (pos) => {
					this.handleToscroll(pos);
				}),
				scroll.on('touchEnd', (pos) => {
					this.handleTotouchend(pos);
				})
		},
		methods: {
			ToScrolltop(y) {
				this.scroll.scrollTo(0, y)
			}
		}
	}
</script>

<style scoped>
	.wrapper {
		height: 100%;
	}
</style>
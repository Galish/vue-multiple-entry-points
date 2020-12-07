<template>
	<Header msg="Home page text..." />

	Go to <a href="/form.html">form</a>
</template>

<script>
import Header from './Header.vue'

export default {
	name: 'Home',
	components: {
		Header
	}
}
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
a {
	color: #42b983;
}
</style>

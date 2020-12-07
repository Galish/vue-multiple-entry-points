<template>
	<div class="header">
		<img alt="Vue logo" src="../assets/logo.png">
		<p>{{msg}}</p>
	</div>
</template>

<script>
export default {
	name: 'Header',
	props: {
		msg: String
	}
}
</script>

<style scoped>
.header {
	margin-bottom: 40px;
}
</style>

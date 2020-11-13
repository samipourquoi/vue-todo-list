<template>
	<div id="app">
		<h1>#todo</h1>
		<div id="nav">
			<router-link to="/">All</router-link>
			<router-link to="/active">Active</router-link>
			<router-link to="/completed">Completed</router-link>
		</div>
		<router-view/>
	</div>
</template>

<style scoped>
h1 {
	font-family: "Raleway", sans-serif;
	font-weight: 700;
}
</style>

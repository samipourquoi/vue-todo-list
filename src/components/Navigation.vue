<template>
	<nav>
		<div class="nav-element">
			<router-link to="/" class="nav-link">
				All
				<div class="rectangle"></div>
			</router-link>
		</div>
		<div class="nav-element">
			<router-link to="/active" class="nav-link">
				Active
				<div class="rectangle"></div>
			</router-link>
		</div>
		<div class="nav-element">
			<router-link to="/completed" class="nav-link">
				Completed
				<div class="rectangle"></div>
			</router-link>
		</div>
	</nav>
</template>

<script>
export default {
	name: "Navigation"
}
</script>

<style scoped>
/* Disables link styling */
a {
	color: inherit;
	text-decoration: none;
}

nav {
	margin-top: 58px;
	display: flex;
	height: 36px;

	border-bottom: #BDBDBD solid 1px;
}

.nav-element {
	width: 100%;
	text-align: center;
}

.nav-link {
	display: inline-flex;
	flex-direction: column;
	justify-content: space-between;
	height: 100%;

	color: #333333;
	font-size: 14px;
	font-weight: 600;
	font-family: "Montserrat", sans-serif;
}

.rectangle {
	padding: 0 1.4em;
	margin-left: -1.4em;
	margin-bottom: -1px;
	border-radius: 10px 10px 0 0;
	width: 100%;
	height: 4px;
	background-color: #2F80ED;
}
</style>
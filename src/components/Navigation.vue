<template>
	<nav>
		<div class="nav-element">
			<router-link class="nav-link" to="/">
				All
				<div class="rectangle" v-if="getUrl() == '/'"></div>
			</router-link>
		</div>
		<div class="nav-element">
			<router-link class="nav-link" to="/active">
				Active
				<div class="rectangle" v-if="getUrl() == '/active'"></div>
			</router-link>
		</div>
		<div class="nav-element">
			<router-link class="nav-link" to="/completed">
				Completed
				<div class="rectangle" v-if="getUrl() == '/completed'"></div>
			</router-link>
		</div>
	</nav>
</template>

<script>
export default {
	name: "Navigation",
	methods: {
		getUrl() {
			return this.$route.path;
		}
	}
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
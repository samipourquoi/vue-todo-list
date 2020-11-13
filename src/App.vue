<template>
	<div id="app">
		<h1>#todo</h1>
		<Navigation/>
		<main>
			<router-view/>
		</main>
	</div>
</template>

<script>
import Navigation from "@/components/Navigation";

export default {
	components: { Navigation }
}
</script>

<style scoped>
#app {
	padding: 0 28%;
	box-sizing: border-box;
}

h1 {
	color: #333333;
	text-align: center;
	font-family: "Raleway", sans-serif;
	font-weight: 700;
}
</style>
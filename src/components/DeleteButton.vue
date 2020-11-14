<template>
<div class="delete-button">
	<button type="button" @click="deleteAll">delete all</button>
</div>
</template>

<script>
export default {
	name: "DeleteButton",
	methods: {
		deleteAll() {
			this.$store.state.list = this.$store.state.list.filter(e => !e.checked);
		}
	}
}
</script>

<style scoped>
.delete-button {
	margin: 40px 0 40px 40px;
	float: right;
}

button {
	color: white;
	height: 40px;
	width: 140px;
	font-family: "Montserrat", sans-serif;
	font-weight: 400;
	font-size: 14px;
	background-color: #EB5757;
	border-radius: 10px;
	border: none;
}

button:focus {
	outline: none;
	box-shadow: 0 2px 6px rgba(0, 0, 0, 0.20);
}
</style>
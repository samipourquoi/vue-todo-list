<template>
<div class="add-button">
	<input type="text" placeholder="add details">
	<button type="submit">Add</button>
</div>
</template>

<script>
export default {
	name: "AddButton"
}
</script>

<style scoped>
.add-button {
	width: 100%;
	display: flex;
	margin-top: 15px;
}

input {
	margin-right: 25px;
	height: 50px;
	width: 100%;
	padding-left: 10px;
	color: #828282;

	border: #BDBDBD solid 1px;
}

input,
button {
	font-family: "Montserrat", sans-serif;
	font-weight: 400;
	font-size: 14px;
	border-radius: 10px;
}

input:focus, button:focus {
	outline: none;
	box-shadow: 0 2px 6px rgba(0, 0, 0, 0.20);
}

button {
	width: 110px;
	color: white;
	border: none;
	background: #2F80ED;
}
</style>
<template>
	<li class="todo-item">
		<input class="button" type="checkbox" v-model="item.checked">
		<span>{{ item.name }}</span>
	</li>
</template>

<script>
export default {
	name: "Item",
	props: {
		item: {
			type: Object,
			required: true
		}
	}
}
</script>

<style scoped>
li {
	margin-top: 27px;
	list-style: none;
	display: flex;
	align-items: center;
}

.button {
	border: #BDBDBD solid 5px;
	height: 22px;
	width: 22px;
}

li span {
	margin-left: 7px;
	color: #333333;
	font-size: 18px;
	font-weight: 500;
	font-family: "Montserrat", sans-serif;
}

.button:checked + span {
	text-decoration: #333333 line-through;
}
</style>
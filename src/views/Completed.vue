<template>
	<div class="completed" v-if="$store.state.list.some(e => e.checked)">
		<Todo :list="$store.state.list.filter(e => e.checked)" deletable/>
		<DeleteButton/>
	</div>
	<div v-else>
		<h2>Oops! It's all empty!</h2>
	</div>
</template>

<script>
import Todo from "@/components/Todo";
import DeleteButton from "@/components/DeleteButton";
export default {
	name: "Completed",
	components: { DeleteButton, Todo }
}
</script>

<style scoped>
h2 {
	color: #333333;
	text-align: center;
	font-family: "Raleway", sans-serif;
	font-weight: 700;
}
</style>
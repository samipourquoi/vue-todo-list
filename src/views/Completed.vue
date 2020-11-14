<template>
	<div class="completed">
		<Todo :list="$store.state.list.filter(e => e.checked)" deletable/>
	</div>
</template>

<script>
import Todo from "@/components/Todo";
export default {
	name: "Completed",
	components: { Todo }
}
</script>

<style scoped>

</style>
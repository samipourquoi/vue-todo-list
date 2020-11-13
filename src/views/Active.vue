<template>
	<div class="active">
		<Todo :list="$store.state.list.filter(e => !e.checked)"/>
	</div>
</template>

<script>
import Todo from "@/components/Todo";
export default {
	name: "Active",
	components: {
		Todo
	}
}
</script>

<style scoped>
</style>
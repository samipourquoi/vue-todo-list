<template>
	<div class="active">
		<AddButton/>
		<Todo :list="$store.state.list.filter(e => !e.checked)"/>
	</div>
</template>

<script>
import Todo from "@/components/Todo";
import AddButton from "@/components/AddButton";
export default {
	name: "Active",
	components: {
		Todo,
		AddButton
	}
}
</script>

<style scoped>
</style>
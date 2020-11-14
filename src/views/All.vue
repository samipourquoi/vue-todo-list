<template>
	<div class="all">
		<AddButton/>
		<Todo :list="$store.state.list"/>
	</div>
</template>

<script>
import Todo from "@/components/Todo.vue"
import AddButton from "@/components/AddButton";
export default {
	name: "Home",
	components: {
		Todo,
		AddButton
	}
}
</script>

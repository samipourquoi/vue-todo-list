<template>
	<div class="all">
		<Todo :list="$store.state.list"/>
	</div>
</template>

<script>
import Todo from "@/components/Todo.vue"

export default {
	name: "Home",
	components: {
		Todo
	}
}
</script>

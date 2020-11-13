<template>
	<article>
		<AddButton/>
		<ul v-for="item in $store.state.list" :key="item">
			<Item :name="item"/>
		</ul>
	</article>
</template>

<script>
import AddButton from "@/components/AddButton";
import Item from "@/components/Item";
export default {
	name: "Todo",
	components: { Item, AddButton }
}
</script>

<style scoped>
ul {
	padding-left: 0;
}
</style>
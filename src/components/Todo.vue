<template>
	<article>
		<AddButton/>
		<ul v-for="item in list" :key="item.id">
			<Item :item="item"/>
		</ul>
	</article>
</template>

<script>
import AddButton from "@/components/AddButton";
import Item from "@/components/Item";
export default {
	name: "Todo",
	components: { Item, AddButton },
	props: {
		list: {
			type: Array,
			required: true
		}
	}
}
</script>

<style scoped>
ul {
	padding-left: 0;
}
</style>
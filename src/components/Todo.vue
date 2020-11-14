<template>
	<article>
		<ul v-for="item in list" :key="item.id">
			<Item :item="item" :deletable="deletable ? 'deletable' : null"/>
		</ul>
	</article>
</template>

<script>
import Item from "@/components/Item";
export default {
	name: "Todo",
	components: { Item },
	props: {
		list: {
			type: Array,
			required: true
		},
		deletable: {
			type: Boolean,
			require: false,
			default: false
		}
	}
}
</script>

<style scoped>
ul {
	padding-left: 0;
}
</style>
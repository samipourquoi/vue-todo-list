<template>
	<li class="todo-item">
		<input class="button" type="checkbox" v-model="item.checked">
		<span class="name">{{ item.name }}</span>
		<div class="image" v-if="deletable">
			<img @click="deleteItem" src="/delete.svg" alt="delete item">
		</div>
	</li>
</template>

<script>
export default {
	name: "Item",
	props: {
		item: {
			type: Object,
			required: true
		},
		deletable: {
			type: Boolean,
			require: false,
			default: false
		}
	},
	methods: {
		deleteItem() {
			let index = this.$store.state.list.findIndex(e => e.id == this.item.id);
			this.$store.state.list.splice(index, 1);
			this.$destroy();
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

.name {
	width: 100%;
	margin-left: 7px;
	color: #333333;
	font-size: 18px;
	font-weight: 500;
	font-family: "Montserrat", sans-serif;
}

.button:checked + .name {
	text-decoration: #333333 line-through;
}

.image {
	display: inline-flex;
	justify-content: flex-end;
}

.image img {
	opacity: 25%;
}

.image img:hover {
	cursor: pointer;
}

.image img:active {
	transform: translateY(1px);
}

</style>
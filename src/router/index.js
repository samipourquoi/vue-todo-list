import Vue from "vue"
import VueRouter from "vue-router"
import All from "../views/All.vue"
import Active from "@/views/Active";
import Completed from "@/views/Completed";

Vue.use(VueRouter)

const routes = [
	{
		path: "/",
		name: "All",
		component: All
	},
	{
		path: "/active",
		name: "Active",
		component: Active
	},
	{
		path: "/completed",
		name: "Completed",
		component: Completed
	}
]

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes
})

export default router

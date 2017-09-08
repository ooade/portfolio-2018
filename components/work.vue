<template>
	<ul>
		<li v-for="item in list">
			<a target="_blank" :href="item.link">{{item.title}}</a>
			<span v-for="stack in item.stacks" class="stack"> {{stack}} </span>
		</li>
	</ul>
</template>

<script>
export default {
	data() {
		return {
			list: [
				{
					title: "Pinterest Clone",
					link: "https://p1nit.herokuapp.com",
					stacks: ['React.js', 'Meteor.js', 'MongoDB']
				},
				{
					title: "Force Directed Graph",
					link: "https://codepen.io/ademola/full/OXgBzY",
					stacks: ['D3.js']
				},
				{
					title: "Simon Game",
					link: "https://codepen.io/ademola/full/KdzPdr",
					stacks: ['JQuery']
				},
				{
					title: "Tic Tac Toe Game",
					link: "https://codepen.io/ademola/full/pjjoVd",
					stacks: ['Angular.js']
				},
				{
					title: "Chart the Stock Market",
					link: "https://stockstock.herokuapp.com",
					stacks: ['Angular.js', 'Socket.io', 'Express.js']
				},
				{
					title: "Others",
					link: "https://github.com/ooade/repositories",
					stacks: null
				}
			]
		}
	}
}
</script>

<style>
.stack {
	margin-left: 3px;
	padding: 2px 5px;
	border-radius: 3px;
	background-color: burlywood;
}

.stack:nth-child(2) {
	background-color: cornflowerblue;
}

.stack:nth-child(3) {
	background-color: tomato;
}
</style>

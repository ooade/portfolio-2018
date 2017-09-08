<template>
	<div class="index">
		<h1> Ademola Adegbuyi </h1>
		<div class="description"> FullStack Web Developer [
			<a href="#about">more</a>] </div>

		<h2 class="category"> Talks </h2>
		<talks></talks>

		<h2 class="category"> Contact </h2>
		<contact></contact>

		<h2 class="category" id="about"> More About Me </h2>
		<more></more>

		<h2 class="category"> Previously Worked on </h2>
		<work></work>
	</div>
</template>

<script>
import contact from '@/components/contact'
import more from '@/components/more'
import talks from '@/components/talks'
import work from '@/components/work'

export default {
	components: {
		contact,
		more,
		talks,
		work
	}
}
</script>


<style>
body {
	padding: 10px;
	text-align: center;
	background-color: #1565C0;
	background-image: linear-gradient(260deg, #1565C0 0%, #7E57C2 100%);
	color: #fff;
	transition: all 0.5s;
	margin-top: 15vh;
}

body::-webkit-scrollbar-track {
	box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
	background-color: #f5f5f5;
}

body::-webkit-scrollbar {
	width: 10px;
}

body::-webkit-scrollbar-thumb {
	background-color: #0D47A1;
	background-image: -webkit-linear-gradient(90deg, rgba(0, 0, 0, 0.2) 25%, transparent 25%, transparent 50%, rgba(0, 0, 0, 0.2) 50%, rgba(0, 0, 0, 0.2) 75%, transparent 75%, transparent);
}


.category {
	margin-top: 100px;
}

a {
	color: #90CAF9;
	margin: 10px;
}

ul {
	list-style: none
}

li {
	margin-bottom: 30px;
}
</style>
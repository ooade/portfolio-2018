<template>
	<ul>
		<li v-for="talk in talks">
			{{talk.event}} [
			<a target="_blank" :href="talk.link">{{talk.topic}}</a>]
		</li>
	</ul>
</template>

<script>
export default {
	data() {
		return {
			talks: [
				{
					event: "Google I/O Extended 2017 Lagos",
					link: "https://speakerdeck.com/ooade/super-charging-single-page-apps",
					topic: "Super Charging Single Page Apps"
				},
				{
					event: "Facebook Developer Circles",
					link: "https://docs.google.com/presentation/d/13yTCv22Xv1gp6SkzZMVZSkvHgB8lcvkfTRizq0GdCeA/edit?usp=sharing",
					topic: "Building Apps With Apollo GraphQL"
				},
				{
					event: "FreeCodeCamp Ikeja",
					link: "https://medium.com/@ooade/freecodecamp-ikeja-novembers-meetup-63870dd074f7",
					topic: "Scaling through the hurdles of unemployment as a web developer"
				}
			]
		}
	}
}
</script>

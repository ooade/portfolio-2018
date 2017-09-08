<template>
	<ul>
		<li v-for="item in list">
			{{item.title}} [
			<a target="_blank" :href="item.link">{{item.desc}}</a>]
		</li>
	</ul>
</template>

<script>
export default {
	data() {
		return {
			list: [
				{
					title: 'Open Sourcerer',
					desc: 'Github',
					link: 'https://github.com/ooade'
				},
				{
					title: 'Anime Freak',
					desc: 'Anime List',
					link: 'https://myanimelist.net/animelist/ademola'
				},
				{ title: 'VS Code Advocate' },
				{
					title: 'Plays Chess',
					desc: '900+ on Chesscom Tactics',
					link: 'https://www.chess.com/member/ooade'
				}
			]
		}
	}
}
</script>

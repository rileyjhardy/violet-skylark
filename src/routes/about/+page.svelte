<script>
	import { fade } from 'svelte/transition';
</script>

<div class="about">
	<div class="about__text">
		<p>
			Hey there! I'm a web developer who geeks out over coding and loves turning digital ideas into
			reality. When I'm not creating awesome websites, you'll probably find me catching the latest
			movie or hanging with my friends. Tech is my passion, and I'm all about using my skills to
			make cool stuff that helps people.
		</p>
		<a href="/">home</a>
	</div>

	<h2>About</h2>
</div>

<style>
	.about {
		height: var(--page-height);
		border: var(--border-width) var(--border-color) solid;
		display: grid;
		grid-template-columns: 1fr 200px;

		@media (max-width: 768px) {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
		}
	}

	.about__text {
		padding: 5rem;
		place-content: center;

		@media (max-width: 768px) {
			padding: 2rem;
			p {
				font-size: 1.5rem;
			}
		}
	}

	h2 {
		letter-spacing: -4.7rem;
		text-transform: uppercase;
		writing-mode: vertical-rl;
		text-orientation: upright;
		font-size: 8rem;
		place-self: center;

		@media (max-width: 768px) {
			font-size: 5rem;
			writing-mode: horizontal-tb;
			text-orientation: initial;
			letter-spacing: -0.7rem;
			font-style: italic;
			margin: 0;
			animation: blur-in 500ms ease;
		}
	}
</style>

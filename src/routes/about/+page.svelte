<script>
	import { fade } from 'svelte/transition';
	import { base } from '$app/paths';
</script>

<div class="about">
	<div class="about__text">
		<p>
			Hey there! I'm a web developer who geeks out over coding and loves turning digital ideas into
			reality. When I'm not creating awesome websites, you'll probably find me catching the latest
			movie or hanging with my friends. Tech is my passion, and I'm all about using my skills to
			make cool stuff that helps people.
		</p>
	</div>
	<a class="back" href={`${base}/`}>home &gt;&gt;</a>

	<h2>About</h2>
</div>

<style>
	.about {
		position: relative;
		height: var(--page-height);
		border: var(--border-width) var(--border-color) solid;
		display: grid;
		grid-template-columns: 1fr 200px;

		@media (max-width: 768px) {
			display: flex;
			flex-direction: column-reverse;
			justify-content: flex-end;
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
			margin-top: 2rem;
			animation: blur-in 500ms ease;
		}
	}

	.back {
		color: unset;
		position: absolute;
		right: 10px;
		top: 10px;
		text-decoration: none;
		font-weight: bold;
		font-style: italic;
		text-transform: uppercase;
		font-family: 'DM Sans', sans-serif;
	}
</style>

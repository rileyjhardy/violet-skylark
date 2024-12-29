<script lang="ts">
	import { base } from '$app/paths';
</script>

<div class="projects">
	<div>
		<a target="_blank" href="https://michaelkelleyfilm.com">michaelkelleyfilm.com</a>
	</div>
	<h2>Projects</h2>
	<a class="back" aria-label="home" href={`${base}/`}>home &gt;&gt;</a>
</div>

<style>
	.projects {
		position: relative;
		height: var(--page-height);
		border: var(--border-width) var(--border-color) solid;
		display: grid;
		grid-template-rows: 1fr 200px;
		place-items: center;

		@media (max-width: 768px) {
			display: flex;
			flex-direction: column-reverse;
			justify-content: flex-end;
		}
	}

	h2 {
		letter-spacing: -0.7rem;
		text-transform: uppercase;
		font-size: 8rem;
		place-self: center;

		@media (max-width: 768px) {
			font-size: 5rem;
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
		top: 10px;
		right: 10px;
		font-weight: bold;
		font-style: italic;
		font-family: 'DM Sans', sans-serif;
		text-transform: uppercase;
		text-decoration: none;
	}
</style>

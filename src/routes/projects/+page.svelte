<script>
	import { onMount } from 'svelte';

	onMount(() => {
		// This ensures the component is properly hydrated on the client
		console.log('projects mounted');
	});
</script>

<div class="projects">
	<div>
		other content
		<a aria-label="home" href="/">home</a>
	</div>
	<h2>Projects</h2>
</div>

<style>
	.projects {
		height: var(--page-height);
		border: var(--border-width) var(--border-color) solid;
		display: grid;
		grid-template-rows: 1fr 200px;
		place-items: center;

		@media (max-width: 768px) {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
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
			animation: blur-in 500ms ease;
		}
	}
</style>

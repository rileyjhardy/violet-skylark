<script lang="ts">
	import { base } from '$app/paths';
</script>

<div class="contact">
	<h2>Contact</h2>
	<div>
		<h3>Need some help with your project?</h3>
		<a aria-label="home" href={`${base}/`}>home</a>
	</div>
</div>

<style>
	.contact {
		height: var(--page-height);
		border: var(--border-width) var(--border-color) solid;
		display: grid;
		grid-template-columns: 200px 1fr;
		place-items: center;

		h2 {
			letter-spacing: -4.7rem;
			text-transform: uppercase;
			font-size: 8rem;
			place-self: center;
			writing-mode: vertical-rl;
			text-orientation: upright;
		}

		@media (max-width: 768px) {
			display: flex;
			flex-direction: column-reverse;
			justify-content: space-between;

			h2 {
				font-size: 5rem;
				letter-spacing: -0.3rem;
				text-orientation: initial;
				writing-mode: horizontal-tb;
				font-style: italic;
				margin: 0;
				animation: blur-in 500ms ease;
			}
		}
	}
</style>

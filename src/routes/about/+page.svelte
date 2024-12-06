<script>
	import { fade } from 'svelte/transition';
</script>

<div class="about">
	<div class="about__text">
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
			laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
			voluptate velit esse cillum dolore eu fugiat nulla pariatur.
		</p>
		<p>
			Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
			id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
			doloremque laudantium.
		</p>
		<a href="/">home</a>
	</div>

	<h2 in:fade={{ duration: 1000 }}>About</h2>
</div>

<style>
	.about {
		height: calc(100vh - (var(--border-width) * 2));
		border: var(--border-width) var(--border-color) solid;
		display: grid;
		grid-template-columns: 1fr 200px;
	}

	.about__text {
		padding: 5rem;
		place-content: center;
	}

	h2 {
		letter-spacing: -4.7rem;
		text-transform: uppercase;
		writing-mode: vertical-rl;
		text-orientation: upright;
		font-size: 8rem;
		place-self: center;
		/* animation: vibrate 1s linear infinite;
    filter: blur(1px) */
	}
</style>

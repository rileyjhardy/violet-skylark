<div class="contact">
	<h2>Contact</h2>
	<div>
		<h3>Need some help with your project?</h3>
		<a aria-label="home" href="/">home</a>
	</div>
</div>

<style>
	.contact {
		height: calc(100vh - (var(--border-width) * 2));
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
			/* animation: vibrate 1s linear infinite;
			filter: blur(1px); */
		}
	}
</style>

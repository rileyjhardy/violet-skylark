<script lang="ts">
	import { base } from '$app/paths';
</script>

<div class="contact">
	<h2>Contact</h2>
	<div class="content">
		<h3>Need some help with your project? Send me a message!</h3>
		<a class="links" href="mailto:me@rileyhardy.com">
			<p>me@rileyhardy.com</p>
		</a>
		<a class="links" href="tel:+14792207116">
			<p>479-220-7116</p>
		</a>
	</div>
	<a class="back" aria-label="home" href={`${base}/`}>&lt;&lt; home</a>
</div>

<style>
	.contact {
		position: relative;
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
			flex-direction: column;
			place-items: unset;

			h2 {
				font-size: 5rem;
				letter-spacing: -0.3rem;
				text-orientation: initial;
				writing-mode: horizontal-tb;
				font-style: italic;
				margin: 0;
				margin-top: 2rem;
				animation: blur-in 500ms ease;
			}
		}

		h3 {
			font-size: 2rem;
			margin: 2rem 1.5rem;

			@media (max-width: 768px) {
				margin: 1.5rem;
			}
		}

		.content {
			position: relative;
		}

		.links {
			text-decoration: none;
			color: unset;

			p {
				margin: 0.5rem 1.5rem;
				@media (max-width: 768px) {
					font-size: 1.5rem;
				}
			}
		}

		.back {
			color: unset;
			position: absolute;
			left: 10px;
			top: 10px;
			text-decoration: none;
			text-transform: uppercase;
			font-style: italic;
			font-weight: bold;
			font-family: 'DM Sans', sans-serif;
		}
	}
</style>

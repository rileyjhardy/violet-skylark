<script lang="ts">
</script>

<div class="container">
	<div class="hero">
		<h1>Riley J. Hardy</h1>
		<h2>fullstack developer</h2>
	</div>

	<nav>
		<div class="about">
			<a aria-label="about" href="/about">about</a>
		</div>
		<div class="projects">
			<a aria-label="projects" href="/projects">projects</a>
		</div>
		<div class="contact">
			<a aria-label="contact" href="/contact">contact</a>
		</div>
	</nav>
</div>

<style>
	h1 {
		font-family: 'DM Sans', sans-serif;
		letter-spacing: -0.8rem;
		font-weight: 700;
		font-size: 10rem;
		animation: blur-in 700ms 300ms ease both;
		margin: 0;
		/* filter: blur(1px); */

		@media (max-width: 768px) {
			font-size: 4rem;
			letter-spacing: -0.3rem;
		}
	}

	h2 {
		font-family: 'DM Sans', sans-serif;
		letter-spacing: -0.1rem;
		text-transform: uppercase;
		font-style: italic;
	}

	a {
		text-decoration: none;
		font-family: 'DM Sans', sans-serif;
		writing-mode: vertical-rl;
		text-orientation: mixed;
		text-decoration: none;
		font-weight: 700;
		font-style: italic;
		color: unset;
		letter-spacing: -0.1rem;

		@media (max-width: 768px) {
			writing-mode: unset;
			text-orientation: unset;
		}
	}

	nav {
		display: contents;

		@media (max-width: 768px) {
			display: flex;
			flex-direction: column;

			a {
				font-size: 5rem;
			}

			div {
				line-height: 0.8;
			}

			div:nth-child(odd) {
				text-align: right;
			}
		}
	}

	.container {
		height: var(--page-height);
		border: var(--border-width) var(--border-color) solid;
		display: grid;
		grid-template-columns: 100px 1fr 100px;
		grid-template-rows: 100px 1fr 100px;
		grid-template-areas:
			'. nav-up .'
			'nav-left hero nav-right'
			'. nav-down .';

		@media (max-width: 768px) {
			padding: var(--mobile-padding);
			grid-template-columns: unset;
			grid-template-rows: unset;
			grid-template-areas: unset;
			display: flex;
			flex-direction: column;
			height: calc(100vh - (var(--mobile-padding) * 2) - var(--border-width) * 2);
			justify-content: space-between;
		}
	}

	.hero {
		grid-area: hero;
		place-self: center;

		@media (max-width: 768px) {
			place-self: unset;
		}
	}

	.about {
		grid-area: nav-left;
		place-self: center;

		@media (max-width: 768px) {
			place-self: unset;
		}

		a {
			transform: rotate(180deg);
		}
	}

	.projects {
		grid-area: nav-up;
		place-self: center;

		@media (max-width: 768px) {
			place-self: unset;
		}

		a {
			transform: rotate(-90deg);
		}
	}

	.contact {
		grid-area: nav-right;
		place-self: center;

		@media (max-width: 768px) {
			place-self: unset;
		}

		a {
			transform: rotate(-90deg);
		}
	}

	.unfocused {
		transform: scale(0.95);
		filter: blur(10px);
	}

	.focused {
		transform: scale(1);
		filter: blur(0);
	}

	@keyframes blur-in {
		0% {
			filter: blur(50px);
			opacity: 0;
			transform: scale(1.1) translateX(100px);
		}

		50% {
			transform: translateX(-50px);
		}

		100% {
			filter: blur(0);
			opacity: 1;
			transform: scale(1) translateX(0);
		}
	}
</style>

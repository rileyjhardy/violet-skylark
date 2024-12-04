<script lang="ts">
</script>

<div class="container">
	<div class="hero">
		<h1>Riley J. Hardy</h1>
		<h2>fullstack developer</h2>
	</div>

	<div class="about">
		<a aria-label="about" href="/about">about</a>
	</div>
	<div class="projects">
		<a aria-label="projects" href="/projects">projects</a>
	</div>
	<div class="contact">
		<a aria-label="contact" href="/contact">contact</a>
	</div>
</div>

<style>
	h1 {
		font-family: 'DM Sans', sans-serif;
		letter-spacing: -0.8rem;
		font-weight: 700;
		font-size: 10rem;
		animation: blur-in 500ms 300ms ease both;
		margin: 0;
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
	}

	.container {
		height: calc(100vh - 3rem);
		border: 1.5rem solid var(--border-color);
		display: grid;
		grid-template-columns: 100px 1fr 100px;
		grid-template-rows: 100px 1fr 100px;
		grid-template-areas:
			'. nav-up .'
			'nav-left hero nav-right'
			'. nav-down .';
	}

	.hero {
		grid-area: hero;
		place-self: center;
	}

	.about {
		grid-area: nav-left;
		place-self: center;

		a {
			transform: rotate(180deg);
		}
	}

	.projects {
		grid-area: nav-up;
		place-self: center;

		a {
			transform: rotate(-90deg);
		}
	}

	.contact {
		grid-area: nav-right;
		place-self: center;
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

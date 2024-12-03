<div class="overlay"></div>

<style>
	.overlay {
		/* Option 1: More contrasting gradient */
		background: linear-gradient(135deg, #c9eff4 0%, #b4c9e4 100%);

		/* Option 2: Alternative with even more contrast */
		/* background: linear-gradient(135deg, #d4f0f0 0%, #a5c0e3 100%); */

		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;
		z-index: -1;
	}

	.overlay::after {
		animation: grain 8s steps(10) infinite;
		content: '';
		background-image: url('../assets/noise.png');
		height: 300%;
		width: 300%;
		top: -110%;
		left: -50%;
		opacity: 0.3;
		position: fixed;
		pointer-events: none;
	}

	@keyframes grain {
		0%,
		100% {
			transform: translate(0, 0);
		}
		10% {
			transform: translate(-5%, -10%);
		}
		20% {
			transform: translate(-15%, 5%);
		}
		30% {
			transform: translate(7%, -25%);
		}
		40% {
			transform: translate(-5%, 25%);
		}
		50% {
			transform: translate(-15%, 10%);
		}
		60% {
			transform: translate(15%, 0%);
		}
		70% {
			transform: translate(0%, 15%);
		}
		80% {
			transform: translate(3%, 35%);
		}
		90% {
			transform: translate(-10%, 10%);
		}
	}
</style>

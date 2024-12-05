<div class="overlay"></div>

<style>
	.overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;
		z-index: -1;
		transition:
			--gradient-color-1 500ms ease,
			--gradient-color-2 500ms ease;
		background-image: linear-gradient(
			135deg,
			var(--gradient-color-1) 0%,
			var(--gradient-color-2) 100%
		);
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

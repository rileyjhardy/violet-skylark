<script>
	const { theme } = $props();
</script>

<div class={`overlay ${theme}`} />

<style>
	.overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;
		z-index: -1;
	}

	.default {
		background: linear-gradient(135deg, #c9eff4 0%, #b4c9e4 100%);
	}

	.alt1 {
		background: linear-gradient(135deg, #f4e7c9 0%, #e4b4b4 100%);
	}

	.alt2 {
		background: linear-gradient(135deg, #e7c9f4 0%, #b4e4d1 100%);
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

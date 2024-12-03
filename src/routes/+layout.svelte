<script lang="ts">
	import '../global.css';
	import Static from '$lib/static.svelte';
	import { fade } from 'svelte/transition';
	import { slideRight, slideLeft } from '$lib/utilities/flyPageTransition';
	let { data, children } = $props();
</script>

<Static />

<div class="container">
	{#key data.pathname}
		<div in:fade={{ duration: 300, delay: 400 }} out:fade={{ duration: 300 }}>
			{@render children()}
		</div>
	{/key}
</div>

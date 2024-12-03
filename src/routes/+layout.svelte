<script lang="ts">
	import '../global.css';
	import Static from '$lib/static.svelte';
	import { fade } from 'svelte/transition';
	let { data, children } = $props();
</script>

<Static />

<div class="container">
	{#key data.pathname}
		<div in:fade={{ duration: 500, delay: 600 }} out:data.transition>
			{@render children()}
		</div>
	{/key}
</div>

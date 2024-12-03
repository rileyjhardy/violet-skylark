<script lang="ts">
	import '../global.css';
	import Static from '$lib/static.svelte';
	import { fade } from 'svelte/transition';
	let { data, children } = $props();

	const themeMap: Record<string, string> = {
		'/': 'alt1',
		'/about': 'default',
		'/projects': 'alt2',
		'/contact': 'default'
	};
</script>

<Static theme={themeMap[data.pathname] || 'default'} />

<div class="container">
	{#key data.pathname}
		<div in:fade={{ duration: 300, delay: 600 }} out:data.transition>
			{@render children()}
		</div>
	{/key}
</div>

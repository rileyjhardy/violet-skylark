<script lang="ts">
	import '../global.css';
	import Static from '$lib/static.svelte';
	import { fade } from 'svelte/transition';
	import { config } from '$lib/state/theme.svelte';

	let { data, children } = $props();

	const themeMap: Record<string, string> = {
		'/': 'winter-neva',
		'/about': 'warm-flame',
		'/projects': 'mint-leaf',
		'/contact': 'dusty-grass'
	};

	function delayTheme(pathname: string) {
		setTimeout(() => {
			const theme1 = config[themeMap[pathname]].start;
			const theme2 = config[themeMap[pathname]].end;

			document.documentElement.style.setProperty('--gradient-color-1', theme1);
			document.documentElement.style.setProperty('--gradient-color-2', theme2);
		}, 300);
	}

	$effect(() => {
		delayTheme(data.pathname); 
	});
</script>

<Static />

<div class="container">
	{#key data.pathname}
		<div in:fade={{ duration: 200, delay: 300 }} out:fade={{ duration: 200 }}>
			{@render children()}
		</div>
	{/key}
</div>

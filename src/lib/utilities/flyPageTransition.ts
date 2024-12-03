import { fly } from 'svelte/transition';
import { cubicIn, cubicOut } from 'svelte/easing';
import { layoutState } from '$lib/state/layout.svelte';

export function slideLeft(node: HTMLElement) {
	const width = window.innerWidth;

	return {
		duration: 3000,
		easing: cubicIn,
		css: (t, u) => {
			return `transform: translateX(${u * width}px)`;
		}
	};
}

export function slideRight(node: HTMLElement) {
	const width = window.innerWidth;

	return {
		duration: 3000,
		easing: cubicIn,
		css: (t, u) => {
			return `transform: translateX(${u * width}px)`;
		}
	};
}

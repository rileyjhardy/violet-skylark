import { fly } from 'svelte/transition';
import { cubicOut } from 'svelte/easing';

export function slideLeft(node: HTMLElement) {
	const width = window.innerWidth;

	return {
		duration: 500,
		easing: cubicOut,
		css: (t: number, u: number) => {
			return `transform: translateX(${u * -width}px)`;
		}
	};
}

export function slideRight(node: HTMLElement) {
	const width = window.innerWidth;

	return {
		duration: 500,
		easing: cubicOut,
		css: (t: number, u: number) => {
			return `transform: translateX(${u * width}px)`;
		}
	};
}

export function slideUp(node: HTMLElement) {
	const height = window.innerHeight;

	return {
		duration: 500,
		easing: cubicOut,
		css: (t: number, u: number) => {
			return `transform: translateY(${u * height}px)`;
		}
	};
}

export function slideDown(node: HTMLElement) {
	const height = window.innerHeight;

	return {
		duration: 500,
		easing: cubicOut,
		css: (t: number, u: number) => {
			return `transform: translateY(${u * height}px)`;
		}
	};
}

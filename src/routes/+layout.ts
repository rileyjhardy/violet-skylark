import { fade } from 'svelte/transition';
import { slideRight, slideDown, slideUp, slideLeft } from '$lib/utilities/slideTransistions';

export const load = ({ url }) => {
	const { pathname } = url;

	const positionMap = {
		'/': fade,
		'/about': slideRight,
		'/projects': slideUp,
		'/contact': slideLeft
	};

	return {
		pathname: pathname,
		transition: positionMap[pathname as keyof typeof positionMap]
	};
};

export const prerender = true;
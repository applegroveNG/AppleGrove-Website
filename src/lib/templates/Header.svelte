<script lang="ts">
	import { onMount } from 'svelte';
	import Logo from '$lib/atoms/icons/Logo.svelte';

	let isMenuOpen = false;
	let isMobile = false;
	let activeDropdown: string = '';

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	function toggleDropdown(dropdown: string) {
		if (isMobile) {
			activeDropdown = activeDropdown === dropdown ? '' : dropdown;
		}
	}

	onMount(() => {
		const mediaQuery = window.matchMedia('(max-width: 1199px)');
		isMobile = mediaQuery.matches;

		const handleResize = (e: any) => {
			isMobile = e.matches;
			if (!isMobile) {
				isMenuOpen = false;
				activeDropdown = '';
			}
		};

		mediaQuery.addListener(handleResize);

		return () => {
			mediaQuery.removeListener(handleResize);
		};
	});
</script>

<div class="header-container">
	<div class="left">
		<div class="logo">
			<a href="/"><Logo /></a>
		</div>
		{#if isMobile}
			<!-- svelte-ignore a11y_consider_explicit_label -->
			<button class="hamburger" on:click={toggleMenu}>
				<span class="bar"></span>
				<span class="bar"></span>
				<span class="bar"></span>
			</button>
		{/if}
	</div>

	<nav class:active={isMenuOpen}>
		<div class="dropdown" class:active={activeDropdown === 'services'}>
			<button on:click={() => toggleDropdown('services')}>
				Services
				<svg
					class="caret"
					width="10"
					height="6"
					viewBox="0 0 10 6"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M1 1L5 5L9 1"
						stroke="white"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</button>
			<div class="dropdown-content">
				<a href="/services#consulting">Consulting and Advisory Services</a>
				<a href="/services#strategic">Strategic project Solutions</a>
				<a href="/services#it">IT Services and Digital Transformation</a>
				<a href="/services#venture">Venture Development</a>
			</div>
		</div>
		<a href="/about_us">About Us</a>
		<div class="dropdown" class:active={activeDropdown === 'greyMatter'}>
			<button on:click={() => toggleDropdown('greyMatter')}>
				Grey Matter
				<svg
					class="caret"
					width="10"
					height="6"
					viewBox="0 0 10 6"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M1 1L5 5L9 1"
						stroke="white"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</button>
			<div class="dropdown-content">
				<a href="/">Insights</a>
				<a href="/">Case Studies</a>
				<a href="/">Blog</a>
			</div>
		</div>
		<a href="/contact_us">Contact</a>
		<div class="mobile-only">
			<a href="/">Access Insights</a>
			<a href="/contact_us" class="cta">Talk to us for Free!</a>
		</div>
	</nav>

	<div class="right">
		<a href="/">Access Insights</a>
		<a href="/contact_us" class="cta">Talk to us for Free!</a>
	</div>
</div>

<style>
	.header-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem 2rem;
		background-color: #151d3b;
	}

	@media (min-width: 1199px) {
		.header-container {
			padding: 3rem 6rem;
		}
	}

	.left {
		display: flex;
		align-items: center;
		gap: 2rem;
	}

	.logo {
		display: flex;
		align-items: center;
	}

	nav {
		display: flex;
		gap: 1rem;
	}

	@media (min-width: 1199px) {
		nav {
			gap: 3rem;
		}
	}

	.dropdown {
		position: relative;
	}

	.dropdown > button {
		cursor: pointer;
		font-family: Inter;
		font-size: 16px;
		font-weight: 600;
		line-height: 24px;
		text-align: left;
		color: white;
		display: flex;
		align-items: center;
		gap: 4px;
		display: flex;
		align-items: center;
	}

	.caret {
		transition: transform 0.3s ease;
	}

	.dropdown:hover .caret,
	.dropdown.active .caret {
		transform: rotate(180deg);
	}

	.dropdown-content {
		display: none;
		position: absolute;
		background-color: white;
		min-width: 230px;
		padding: 20px;
		z-index: 1;
		border-radius: 8px;
	}

	.dropdown-content a {
		color: #101828;
		padding: 12px;
		text-decoration: none;
		display: block;
	}

	.dropdown-content a:hover {
		background-color: #1f2a4b;
		color: white;
		border-radius: 8px;
	}

	.right {
		display: flex;
		align-items: center;
		gap: 2rem;
	}

	.cta {
		padding: 0.5rem 1rem;
		background-color: #f9a825;
		color: #151d3b;
		border-radius: 5px;
	}

	.cta:hover {
		background-color: #f9a825;
	}

	a {
		color: white;
		text-decoration: none;
		font-size: 16px;
		font-weight: 600;
		line-height: 24px;
		text-align: left;
	}

	a:hover {
		text-decoration: underline;
	}

	a:visited {
		text-decoration: none;
	}

	.hamburger {
		display: none;
		background: none;
		border: none;
		cursor: pointer;
	}

	.bar {
		display: block;
		width: 25px;
		height: 3px;
		margin: 5px auto;
		background-color: white;
	}

	.mobile-only {
		display: none;
	}

	@media (min-width: 1200px) {
		.dropdown:hover .dropdown-content {
			display: block;
		}
	}

	@media (max-width: 1199px) {
		.header-container {
			flex-direction: column;
			align-items: flex-start;
			padding: 1rem;
		}

		.left {
			width: 100%;
			justify-content: space-between;
		}

		.hamburger {
			display: block;
		}

		nav {
			display: none;
			flex-direction: column;
			width: 100%;
			gap: 1rem;
			padding-top: 1rem;
		}

		nav.active {
			display: flex;
		}

		.dropdown-content {
			position: static;
			display: none;
			padding-left: 1rem;
		}

		.dropdown.active .dropdown-content {
			display: block;
		}

		.right {
			display: none;
		}

		.mobile-only {
			display: flex;
			flex-direction: column;
			gap: 1rem;
			width: 100%;
		}

		.cta {
			text-align: center;
		}
	}
</style>

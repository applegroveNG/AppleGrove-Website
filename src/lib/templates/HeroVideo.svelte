<script>
	import { onMount } from 'svelte';
	import { animate, spring } from 'motion';
	import IntersectionObserverSvelte from 'svelte-intersection-observer';
	import Container from '../../Components/Container.svelte';

	let videoElement;
	let isVideoLoaded = $state(false);
	let isMobile = $state(false);

	let intersecting = $state(false);
	let h1Element = $state();

	onMount(() => {
		const mediaQuery = window.matchMedia('(max-width: 768px)');
		isMobile = mediaQuery.matches;

		const handleResize = (e) => {
			isMobile = e.matches;
		};

		mediaQuery.addListener(handleResize);

		return () => {
			mediaQuery.removeListener(handleResize);
		};
	});

	function handleVideoLoad() {
		isVideoLoaded = true;
	}

	const animateH1Scroll = () => {
		if (!h1Element) return;
		animate(
			h1Element,
			{ opacity: [0, 1], translate: [200, 0] },
			{ duration: 1, easing: spring({ stiffness: 100, damping: 15 }) }
		);
	};

	$effect(() => {
		if (intersecting) {
			animateH1Scroll();
		}
	});
</script>

<div class="hero-container" class:mobile={isMobile}>
	<div class="video-container" class:loaded={isVideoLoaded}>
		<video bind:this={videoElement} onloadeddata={handleVideoLoad} autoplay loop muted playsinline>
			<source src="/hero.mp4" type="video/mp4" />
			Your browser does not support the video tag.
		</video>
	</div>
	<div class="container mx-auto h-fit lg:px-14 px-4 py-16">
		<IntersectionObserverSvelte element={h1Element} bind:intersecting>
			<div class="overlay">
				<h1 bind:this={h1Element} >
					Championing Africa's <br /> Development through <br />Innovation
				</h1>
			</div>
		</IntersectionObserverSvelte>
	</div>
</div>

<style>
	.hero-container {
		position: relative;
		width: 100%;
		height: 80vh;
		background-color: #101828;
	}

	.video-container {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		opacity: 0;
		transition: opacity 0.5s ease-in-out;
	}

	.video-container.loaded {
		opacity: 1;
	}

	video {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.overlay {
		display: flex;
		align-items: center;
		max-width: 1440px;
		margin: auto;
		height: 100%;
	}

	h1 {
		color: #fbf8f2;
		font-size: 2.5rem;
		font-family: Inter;
		font-size: 96px;
		font-weight: 600;
		line-height: 116.18px;
		letter-spacing: -0.02em;
		text-align: left;
		opacity: 0;
	}

	@media (max-width: 768px) {
		h1 {
			font-size: 60px;
			padding: 1rem;
		}
	}
</style>

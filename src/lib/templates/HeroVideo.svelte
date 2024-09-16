<script>
	import { onMount } from 'svelte';
	import { animate, spring } from 'motion';
	import IntersectionObserverSvelte from 'svelte-intersection-observer';

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
	<IntersectionObserverSvelte element={h1Element} bind:intersecting>
		<div class="overlay">
			<h1 bind:this={h1Element}>
				Championing Africa's <br /> Development through <br />Innovation
			</h1>
		</div>
	</IntersectionObserverSvelte>
</div>

<style>
	.hero-container {
		position: relative;
		width: 100%;
		height: 70vh;
		background-color: #101828;
		overflow: hidden;
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
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: flex;
		/* justify-content: center; */
		align-items: center;
		background-color: rgba(0, 0, 0, 0.5);
	}

	h1 {
		color: #fbf8f2;
		font-size: 2.5rem;
		padding: 0 1rem;
		/* max-width: 800px; */
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
		}
	}

	@media (min-width: 1199px) {
		h1 {
			padding: 6rem;
		}
	}
</style>

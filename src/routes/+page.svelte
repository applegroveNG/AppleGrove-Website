<script>
	import About from '$lib/templates/About.svelte';
	import HeroVideo from '$lib/templates/HeroVideo.svelte';
	import Innovation from '$lib/templates/Innovation.svelte';
	import Process from '$lib/templates/Process.svelte';
	import ServiceImg from '$lib/assets/sector.png';
</script>

<HeroVideo />
<main>
	<About />
	<Innovation />
	<Process />
	<div class="flex h-fit">
		<div class="flex-1 bg-[#DBE1F9] py-16 pl-24 grid w-full gap-6 place-content-between">
			<span class="w-fit py-2 px-4 border text-sm rounded-full border-[#98A2B3]">Sectors</span>
			<span class="relative border-b border-[#98A2B3]"></span>
			<p class="w-[339px] text-lg leading-7 text-[#344054]">
				AppleGrove is dedicated to providing innovative solutions that drive positive change across
				various sectors.
			</p>
			<h4 class="max-w-[464px] font-semibold text-7xl leading-snug text-apple-blue">
				Private Philanthropic Public
			</h4>
			<a
				href="#top"
				class="bg-[#fffcf5] mt-4 max-w-fit py-2 px-5 font-semibold text-apple-blue rounded-lg"
				>Services we offer
			</a>
		</div>
		<div class="flex-1 relative">
			<div
				class="absolute bg-apple-blue bg-opacity-40 text-text-light top-0 bottom-0 right-0 left-0"
			>
				<p class="absolute left-28 bottom-20 w-[504px] leading-7">
					We help businesses achieve sustainable success through our expertise in market analysis,
					operational efficiency, and risk management.
				</p>
			</div>
			<img class="h-full" src={ServiceImg} alt="Services" />
		</div>
	</div>
</main>

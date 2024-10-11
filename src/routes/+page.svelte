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
	<div class="flex min-h-screen h-fit">
		<div class="flex-1 bg-[#DBE1F9] py-16 pl-24 grid w-full  gap-6 place-content-between">
			<span class="block p-4 border-4 border-r-apple-yellow rounded-full">sectors</span>
			<hr />
			<p class="w-[339px] text-xl leading-7 text-[#344054]">
				AppleGrove is dedicated to providing innovative solutions that drive positive change across
				various sectors.
			</p>
			<h4 class="max-w-[454px] font-semibold text-7xl leading-snug text-apple-blue">Private Philanthropic Public</h4>
			<a href="#top" class="bg-[#fffcf5] mt-4 max-w-fit py-2 px-5 font-semibold text-apple-blue rounded-lg">Services we offer </a>
		</div>
		<div class="flex-1">
			<img class="h-full" src={ServiceImg} alt="Services" />
		</div>
	</div>
</main>

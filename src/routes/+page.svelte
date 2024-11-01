<script>
	import About from '$lib/templates/About.svelte';
	import HeroVideo from '$lib/templates/HeroVideo.svelte';
	import Innovation from '$lib/templates/Innovation.svelte';
	import Process from '$lib/templates/Process.svelte';

	import datas from '$lib/assets/data.json';
	let homeData = datas[0].home[0].sector;
</script>

<HeroVideo />
<main class="overflow-x-hidden">
	<About />
	<Innovation />
	<Process />
	<div class="flex lg:h-fit flex-col lg:flex-row lg:justify-between w-full h-full">
		<div class="flex-1 flex flex-col bg-[#DBE1F9] pl-4 py-16 lg:pl-24 w-full gap-6">
			<span class="w-fit py-2 px-4 border text-sm rounded-full border-[#98A2B3]">Sectors</span>
			<span class="relative border-b border-[#98A2B3] w-9/12"></span>
			<p class="w-[339px] text-lg leading-7 text-[#344054]">
				{homeData.paragraph}
			</p>
			<h4 class="lg:max-w-[464px] font-semibold text-6xl lg:text-7xl leading-snug text-apple-blue">
				{homeData.title}
			</h4>
			<a
				href="#top"
				class="bg-[#fffcf5] mt-4 max-w-fit py-2 px-5 font-semibold text-apple-blue rounded-lg"
				>{homeData.btntext}
			</a>
		</div>
		<div class="flex-1 relative">
			<div
				class="absolute bg-apple-blue bg-opacity-40 text-text-light top-0 bottom-0 right-0 left-0"
			>
				<p class="absolute left-4 lg:left-28 bottom-20 w-[504px] leading-7">
					{homeData.imgtext}
				</p>
			</div>
			<img class="h-full max-h-screen w-full" src={homeData?.img} alt="Services" />
		</div>
	</div>
</main>

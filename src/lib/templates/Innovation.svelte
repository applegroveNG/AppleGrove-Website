<script>
	import img from '$lib/assets/image28.png';
	import Container from '../../Components/Container.svelte';
</script>

<Container>
	<div class="flex flex-col lg:flex-row items-center justify-between w-full gap-4">
		<div class="flex-1 flex w-full flex-col  gap-8">
			<h1 class="font-semibold text-5xl lg:text-6xl lg:leading-[72px] text-apple-blue">
				Innovation and Impact
			</h1>
			<p class="font-medium text-xl leading-7 text-warning lg:w-[504px]">
				Innovation is at the core of what we do. We leverage the power of technology and strategic
				projects to deliver value across both legacy and emerging sectors in Africa
			</p>
			<button
				class="text-apple-blue lg:mt-11 text-base rounded-lg px-6 py-3 font-semibold w-fit block"
				>Learn more about our services</button
			>
		</div>
		<div class="flex-1 w-full">
			<img src={img} alt="a" class=" lg:w-[546px]" />
		</div>
	</div>
</Container>

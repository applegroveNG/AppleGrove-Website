<script>
	import Container from '../../Components/Container.svelte';
	import datas from '$lib/assets/data.json';
	let data = datas[0].home[0].innovation;
</script>

<Container>
	<div class="flex flex-col lg:flex-row items-center justify-between w-full gap-4">
		<div class="flex-1 flex w-full flex-col gap-8">
			<h1 class="font-semibold text-5xl lg:text-6xl lg:leading-[72px] text-apple-blue">
				{data.title}
			</h1>
			<p class="font-medium text-xl leading-7 text-warning lg:w-[504px]">
				{data.paragraph}
			</p>
			<button
				class="text-apple-blue lg:mt-11 text-base rounded-lg px-6 py-3 font-semibold w-fit block"
				>{data.button}</button
			>
		</div>
		<div class="flex-1 w-full">
			{#if data.img}
				<img src={data?.img} alt="a" class=" lg:w-[546px]" />
			{/if}
		</div>
	</div>
</Container>

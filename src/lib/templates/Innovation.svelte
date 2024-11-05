<script>
	import Container from '../../Components/Container.svelte';
	import datas from '$lib/assets/data.json';
	let {innovation} = datas[0].home[0];
</script>

<Container>
	<div class="flex flex-col lg:flex-row items-center lg:items-start justify-between w-full gap-4">
		<div class="flex-1 flex w-full flex-col gap-8">
			<h1 class="font-semibold text-5xl lg:text-6xl lg:leading-[72px] text-apple-blue">
				{innovation.title}
			</h1>
			<p class="font-medium text-xl leading-7 text-warning lg:w-[504px]">
				{innovation.paragraph}
			</p>
			<a href="/services#it"
				class="text-apple-blue lg:mt-11 text-base rounded-lg px-6 py-3 font-semibold w-fit block hover:bg-apple-yellow"
				>{innovation.button}</a
			>
		</div>
		<div class="flex-1 w-full">
			{#if innovation.img}
				<img src={innovation?.img} alt={innovation.title} class="w-full" />
			{/if}
		</div>
	</div>
</Container>

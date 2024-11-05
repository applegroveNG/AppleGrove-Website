<script>
	import datas from '$lib/assets/data.json';
	import Card from '../../Components/Card.svelte';
	import Container from '../../Components/Container.svelte';
	import Tag from '../../Components/Tag.svelte';
	let data = datas[0].about[0];
</script>
<svelte:head>
	<title>Apple Grove - About Us | {data.title}</title>
	<meta property=" og:title" content={data.title} />
</svelte:head>
<main>
	<!-- <Container>
		<div class="relative w-full h-fit">
			<div class="relative w-full h-fit">
				<img src={data.headerbg} alt="" class="w-full h-full" />
				<h2
					class="absolute top-20 right-20 font-medium leading-tight text-6xl max-w-[649px] text-[#FFF]"
				>
					{data.title}
				</h2>
				<div class="absolute w-fit right-0 bottom-0 flex">
					<span class="w-[349px] h-[220px] rounded-tl-3xl rounded-bl-3xl p-[30px] bg-[#FFD073]">
					</span>
					<h5
						class="absolute right-[322px] text-[#151D3B] bottom-14 -rotate-6 font-bold text-4xl max-w-[366.75px]"
					>
						{@html data.subheading}
					</h5>
					<span class="max-w-[391px] p-[30px]">
						<p class="text-sm leading-5">{data.text}</p>
					</span>
				</div>
			</div>
			<img src={data.headerImg} alt="" class="absolute bottom-0" />
		</div>
	</Container> -->
	<Container>
		<div
			class="relative w-full lg:h-[529px] flex flex-col lg:flex-row bg-apple-blue rounded-3xl"
		>
			<div class="hidden absolute bottom-0 lg:flex ">
				<img src={data.headerImg} alt="" class=" " />
			</div>

			<div class="lg:absolute  flex flex-col justify-between max-w-[759px] top-20 right-0 bottom-0">
				<div class="px-3 py-5 h-full ">
					<h2 class="font-medium leading-loose text-4xl text-center lg:text-left lg:text-6xl max-w-[649px] text-[#FFF]">
						{data.title}
					</h2>
				</div>
				<div class="flex lg:hidden w-full justify-center">
					<img src={data.headerImg} alt="" class=" lg:max-w-[390px]" />
				</div>
				<div class="bg-[#FFD073] lg:h-[226px] text-center  rounded-3xl flex flex-col lg:flex-row">
					<h5
						class=" p-8 lg:p-4 text-[#151D3B] -rotate-6 font-bold text-4xl lg:max-w-[366.75px]"
					>
						{@html data.subheading}
					</h5>
					<span class="lg:max-w-[391px] lg:text-left p-[30px] bg-[#FCFCFD] rounded-b-2xl lg:rounded-bl-none  lg:rounded-tr-2xl lg:rounded-br-2xl">
						<p class="text-sm leading-5">{data.text}</p>
					</span>
				</div>
			</div>
		</div>
	</Container>

	{#each data.body as dat, key}
		<Card
			title={dat.title}
			body={dat.body}
			image={dat.img}
			pStyle={'text-[#344054]'}
			flex={key == 1 ? 'reverse' : ''}
			tagText={dat.tag}
		/>
	{/each}

	<Container>
		<Tag tag={'Values'} />
		<h2 class="font-semibold max-w-[811px] text-4xl leading-[50px] text-apple-blue lg:text-5xl mb-32 mt-8 lg:leading-[60px]">
			{data.value.title}
		</h2>
		<div class="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
			{#each data.value.values as values, key}
				<div class="bg-[#091337] rounded-3xl min-h-[499px] p-8">
					<span class="text-[#D0D5DD] flex float-right">0{key + 1}</span>
					<h6 class="text-white mt-12 font-medium text-2xl">
						{values.title}
					</h6>
					<hr class="text-[#98A2B3] my-14" />
					<p class="text-[#FCFCFD] text-xl">
						{values.text}
					</p>
				</div>
			{/each}
		</div>
	</Container>
</main>

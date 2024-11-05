<script lang="ts">
	import Container from '../../Components/Container.svelte';
	import datas from '$lib/assets/data.json';
	let services = datas[0].services[0];
	let serviceCards = services.serviceCard;
</script>


<svelte:head>
	<title>Apple Grove - Services | {services.heroTxt}</title>
	<meta property=" og:title" content={services.heroTxt} />
</svelte:head>

<div class="relative overflow-hidden">
	<div class="container mx-auto w-full lg:px-14">
		<div class="absolute w-full h-full place-content-center lg:leading-5">
			<h1 class="font-semibold text-6xl lg:text-8xl max-w-[1016px] text-[#FBF8F2]">
				{services.heroTxt}
			</h1>
		</div>
	</div>
	<img src={services.heroImg} alt="" class="h-[80vh] object-cover w-full" />
</div>
<Container>
	<div class="grid place-content-center text-center pb-24" id="consulting">
		<h2 class="lg:text-6xl text-4xl font-semibold mb-4 text-apple-blue">
			{services.offerTitle}
		</h2>
		<p class="max-w-[504px] text-[#667085]  text-2xl">
			{services.offerTxt}
		</p>
	</div>
	<div class="grid max-w-[1013px] gap-4 mb-4">
		<span class="border-[#D0D5DD] font-medium text-sm px-2 py-1 rounded-xl w-fit border">01</span>
		<span
			class="relative border-b border-[#D0D5DD] after:border-r after:absolute after:h-14 after:border-[#D0D5DD] after:right-0 after:transform after:-translate-x-1/2 after:-translate-y-1/2"
		></span>
	</div>
	<div class="mt-5 pb-24">
		<h2 class="lg:text-7xl text-4xl max-w-[941px] text-apple-blue font-semibold">
			{services.service[0].Title}
		</h2>
		<div class="flex flex-col gap-10 lg:flex-row mt-20 lg:mt-40 justify-between items-center">
			<img class="" src={services?.service[0].Img} alt={services.service[0].Title} />
			<p class="max-w-[468px] text-apple-blue font-medium text-2xl leading-8">
				{services.service[0].Text}
			</p>
		</div>
	</div>
	<div class="grid max-w-[1013px] gap-4 mb-4">
		<span class="border-[#D0D5DD] font-medium text-sm px-2 py-1 rounded-xl w-fit border">02</span>
		<span
			class="relative border-b border-[#D0D5DD] after:border-r after:absolute after:h-14 after:border-[#D0D5DD] after:right-0 after:transform after:-translate-x-1/2 after:-translate-y-1/2"
		></span>
	</div>
	<div id="strategic"  class="mt-5 pb-24" >
		<h2 class="lg:text-7xl text-4xl max-w-[941px] text-apple-blue font-semibold">
			{services.service[1].Title}
		</h2>
		<div class="flex flex-col lg:flex-row gap-10 justify-between mt-20 lg:mt-40">
			<div class="">
				<img class="w-full" src={services.service[1]?.Img} alt={services.service[1].Title} />
			</div>
			<div class="max-w-[468px]">
				<p class="text-apple-blue font-medium text-2xl leading-8">
					{services.service[1].Text}
				</p>
				<p class="mt-20 text-[#344054] text-lg leading-8">
					{services.service[1].subText}
				</p>
			</div>
		</div>
	</div>
	<div id="it" class="grid max-w-[1013px] gap-4 mb-4">
		<span class="border-[#D0D5DD] font-medium text-sm px-2 py-1 rounded-xl w-fit border">03</span>
		<span
			class="relative border-b border-[#D0D5DD] after:border-r after:absolute after:h-14 after:border-[#D0D5DD] after:right-0 after:transform after:-translate-x-1/2 after:-translate-y-1/2"
		></span>
	</div>
	<div class="mt-5 pb-24">
		<h2 class="lg:text-7xl text-4xl max-w-[941px] text-apple-blue font-semibold">
			{services.service[2].Title}
		</h2>
		<div class="flex flex-col mt-20 lg:mt-40">
			<div class="flex flex-col gap-10 lg:flex-row justify-between">
				<p class="max-w-[468px] text-apple-blue font-medium text-2xl leading-8 text-justify">
					{services.service[2].Text}
				</p>
				<img src={services.service[2]?.Img1} alt={services.service[2].Title} />
			</div>
			<div class="flex flex-col-reverse lg:flex-row mt-10 justify-between">
				<img src={services.service[2]?.Img2} alt={services.service[2].Title} />
				<p class="lg:mt-20 mb-10 max-w-[468px] text-[#344054] text-lg leading-8">
					{services.service[2].subText}
				</p>
			</div>
		</div>
	</div>
</Container>
<Container>
	<div id="venture" class="flex flex-col-reverse lg:flex-row justify-between">
		<div class="flex-col flex gap-16">
			<h2 class="lg:text-7xl md:text-4xl  md:leading-normal text-3xl leading-[45px] lg:leading-[95px] lg:max-w-[941px] text-apple-blue font-semibold  ">
				{@html services.service[3].Title}
			</h2>
			<p class="max-w-[562px] text-apple-blue font-medium text-2xl">
				{services.service[3].Text}
			</p>
			<a href="/venture_development" class="bg-[#FFFCF5] mb-10 font-semibold w-fit text-apple-blue p-4 rounded-lg hover:bg-apple-blue-light hover:text-text-light transition-all ease-in "
				>{services.service[3].btnText}</a
			>
		</div>
		<div class="mb-10">
			<img src={services.service[3].Img} alt="" />
		</div>
	</div>
</Container>
<Container>
	<div id="" class="flex flex-col p-8 lg:p-16 bg-apple-blue rounded-3xl relative h-screen lg:h-[582px]">
		<div class="absolute bottom-0 left-0 z-0 grid text-apple-blue text-6xl font-semibold">
			<h2 class="relative z-0 p-4 rounded-tr-3xl w-fit bg-white">
				<span
					class="absolute z-0 -top-20 -left-20 w-20 h-20 bg-white rounded-tl-3xl transform rotate-90 origin-bottom-right after:h-full after:w-full after:bg-apple-blue after:absolute after:rounded-tl-3xl after:-scale-x-100 after:rotate-90"
				>
				</span>
				{services.service[4].Title1}
			</h2>
			<h2 class="relative z-0  p-4 rounded-r-3xl w-fit bg-white">
				<span
					class="absolute -top-[58px] right-[68px] w-16 h-16 bg-white rounded-tl-3xl transform rotate-[92deg] origin-bottom-right after:h-full after:w-full after:bg-apple-blue after:absolute after:rounded-tl-3xl after:-scale-x-100 after:rotate-[90deg]"
				>
				</span>
				{services.service[4].Title2}
			</h2>
			<span class="relative hidden p-4 rounded-r-3xl h-20 bg-white">
				<span class="absolute top-0 -right-[220px] w-full h-full bg-apple-blue rounded-l-3xl">
				</span>
			</span>
		</div>
		<img
			src={services.service[4].Img}
			alt={services.service[4].Title1}
			class="absolute right-5 -top-20 lg:right-20 lg:-top-36 w-[240px] lg:w-fit"
		/>

		<div class="hidden lg:flex lg:flex-1"></div>
		<div class="flex-1 mt-20 lg:mt-0">
			<p class="text-white z-10 text-xl max-w-[534px] float-end mt-20">
				{services.service[4].Text}
			</p>
		</div>
	</div>
</Container>

<Container>
	<div class="grid lg:grid-cols-2 gap-8">
		{#each serviceCards as service, index}
			<div
				class="flex transition-all hover:shadow-md hover:scale-[1.01] min-h-[568px] max-w-[576px] gap-8 p-6 flex-col rounded-2xl text-justify"
				style="background-color: {service.cardColor};"
			>
				<span>
					<img src={service?.icon} alt="" class={index === 3 ? 'rotate-180' : ''} />
				</span>
				<h5 class="font-bold text-apple-blue text-3xl">
					{service.title}
				</h5>
				<p class="text-[#1D2939] text-xl">
					{service.paragraph}
				</p>
			</div>
		{/each}
	</div>
</Container>

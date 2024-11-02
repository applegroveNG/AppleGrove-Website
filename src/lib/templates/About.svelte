<script>
	import Container from '../../Components/Container.svelte';
	import datas from '$lib/assets/data.json';
	let homeData = datas[0].home[0].about;
</script>

<Container>
	<div class="flex flex-col h-full lg:flex-row gap-8 px-4 justify-between items-center">
		<div class="lg:flex-1">
			<div class=" lg:w-[321px] md:w-[260px] xs:w-[160px]">
				<img src={homeData?.img} alt={homeData.text} class="w-full h-full"/>
			</div>
		</div>
		<div class="lg:flex-1 text-apple-blue flex w-full gap-8 flex-col lg:block">
			<p class="lg:text-2xl lg:leading-10 lg:text-left text-lg leading-8 text-center">
				{homeData.text}
			</p>
			<button
				class="lg:mt-11 text-base lg:w-fit rounded-lg bg-apple-yellow px-6 py-3 font-semibold hover:bg-apple-blue hover:text-white"
				>{homeData.button}</button
			>
		</div>
	</div>
</Container>

<script>
	import Container from '../../Components/Container.svelte';
	import datas from '$lib/assets/data.json';
	let {about} = datas[0].home[0];
</script>

<Container>
	<div class="flex flex-col h-full lg:flex-row gap-8 px-4 justify-between items-center">
		<div class="lg:flex-1">
			<div class=" lg:w-[321px] md:w-[260px] xs:w-[160px]">
				<img src={about?.img} alt={about.text} class="w-full h-full"/>
			</div>
		</div>
		<div class="lg:flex-1 text-apple-blue flex w-full gap-8 flex-col lg:block">
			<p class="lg:text-2xl lg:leading-10 lg:text-left text-lg leading-8 text-center mb-11">
				{about.text}
			</p>
			<a href="/about_us" data-sveltekit-preload-code
				class=" text-base lg:w-fit rounded-lg bg-apple-yellow px-6 py-3 font-semibold hover:bg-apple-blue hover:text-white"
				>{about.button}</a
			>
		</div>
	</div>
</Container>

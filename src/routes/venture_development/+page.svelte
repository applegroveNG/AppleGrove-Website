<script lang="ts">
	import Container from '../../Components/Container.svelte';
	import ventureDatas from '$lib/assets/data.json';
	import Tag from '../../Components/Tag.svelte';
	let ventureData = ventureDatas[0].ventureDevelopment[0];
</script>

<div class="relative overflow-hidden">
	<div class="container mx-auto w-full lg:px-14">
		<div class="absolute flex w-full h-full align-middle items-center">
			<h1 class="font-semibold w-full text-6xl lg:text-9xl max-w-[1016px] text-[#ffffff]">
				{@html ventureData.heroTitle}
			</h1>
		</div>
	</div>
	<img src={ventureData.heroImg} alt="" class="h-[80vh] object-cover w-full" />
</div>
<Container>
	{#each ventureData.section as sect, key}
		<div class="grid max-w-[1013px] gap-4 mb-4">
			<Tag tag={0 + String(key+1)} />
			<span
				class="relative border-b border-[#D0D5DD] after:border-r after:absolute after:h-14 after:border-[#D0D5DD] after:right-0 after:transform after:-translate-x-1/2 after:-translate-y-1/2"
			></span>
		</div>
		<div class="flex flex-col mt-5 pb-24">
			<div class="max-w-[941px]">
				<h2 class="text-6xl lg:text-9xl text-apple-blue font-semibold">
					{@html sect.title}
				</h2>
			</div>
			<div
				class="flex flex-col lg:flex-row {key == 0
					? 'lg:flex-row-reverse'
					: ''} mt-20 lg:mt-40 justify-between w-full"
			>
				<div class="flex max-w-[468px] w-full">
					<span class="flex flex-col h-full gap-12 text-[#1D2939] font-medium text-2xl">
						<h3>
							{sect.subTitle}
						</h3>
						<p class="max-w-[468px] text-[#344054] text-xl leading-8">
							{sect.text}
						</p>
					</span>
				</div>
				<div class="rounded-sm max-w-[576px]">
					<img src={sect.img} class="w-full max-h-[551px] mt-10 lg:mt-0" alt="" />
					<p class=" text-[#1D2939] mt-12 text-xl text-justify leading-8">
						{sect?.imgtext}
					</p>
				</div>
			</div>
		</div>
	{/each}
</Container>

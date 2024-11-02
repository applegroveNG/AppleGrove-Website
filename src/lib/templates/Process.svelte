<script>
	import Container from '../../Components/Container.svelte';
	import datas from '$lib/assets/data.json';
	let homeData = datas[0].home[0].process;
</script>

<Container>
	<div class="flex flex-col w-full gap-4">
		<h1 class="font-semibold text-3xl lg:text-6xl lg:leading-[72px]">{homeData.title}</h1>
		<p class="text-xl lg:w-[656px] lg:text-2xl text-[#1D2939]">
			{homeData.text}
		</p>
		<div class="flex mt-14 flex-col lg:flex-row justify-between h-full gap-2 lg:gap-8 lg:mt-28">
			<div class="flex-1 grid md:grid-cols-2 gap-2">
				{#each homeData.cards as card, index}
					<div
						class=" {index === 3 ? 'rounded-tr-3xl rounded-bl-3xl'	: 'rounded-tl-3xl rounded-br-3xl'}  w-full flex flex-col justify-center items-center"
						style="background-color: {card.color};"
						>
						<div class="grid gap-3 py-14 px-8">
							<span class="text-left text-4xl font-semibold text-apple-blue">0{index + 1}</span>
							<p class="text-apple-blue-light text-2xl font-medium">{card.text}</p>
						</div>
					</div>
				{/each}

			</div>
			<div
				class="flex-1 flex p-8 flex-col font-medium h-full justify-between rounded-3xl gap-4 text-[#FFFCF5] bg-apple-blue"
			>
				<span class="">
					<svg
						width="80"
						height="54"
						viewBox="0 0 80 54"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M40 36.2031L40 0.921253L0 0.921253L40 36.2031Z" fill="#F4AD20" />
						<path d="M40 36.2031L40 0.921253L80 0.921253L40 36.2031Z" fill="#FC6767" />
						<circle cx="20" cy="34" r="20" fill="#D6BBFB" />
						<circle cx="60" cy="34" r="20" fill="#6CE9A6" />
					</svg>
				</span>
				<h5 class=" lg:text-3xl text-2xl mt-16">{homeData.title2}</h5>
				<p class="lg:text-xl text-lg mt-16 leading-7">
					{homeData.paragraph}
				</p>
			</div>
		</div>
	</div>
</Container>

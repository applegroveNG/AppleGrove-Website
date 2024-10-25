<script>
	import Container from '../../Components/Container.svelte';
</script>

<Container>
	<div class="flex flex-col w-full gap-4">
		<h1 class="font-semibold text-3xl lg:text-6xl lg:leading-[72px]">The AppleGrove Process</h1>
		<p class="text-xl lg:w-[656px] lg:text-2xl text-[#1D2939]">
			Achieving our goals means delivering unparalleled value and success to our clients through the
			following steps:
		</p>
		<div class="flex mt-14 flex-col lg:flex-row justify-between h-full gap-2 lg:gap-8 lg:mt-28">
			<div class="flex-1 grid md:grid-cols-2 gap-2">
				<div
					class="bg-apple-yellow rounded-tl-3xl rounded-br-3xl w-full flex flex-col justify-center items-center"
				>
					<div class="grid gap-3 py-14 px-8 ">
						<span class="text-left text-4xl font-semibold text-apple-blue">01</span>
						<p class="text-apple-blue-light text-2xl font-medium">Plunging into Possibilities</p>
					</div>
				</div>
				<div
					class="bg-[#FFEDCB] rounded-tl-3xl rounded-br-3xl w-full flex flex-col justify-center items-center"
				>
					<div class="grid gap-3 py-14 px-8 ">
						<span class="text-left text-4xl font-semibold text-apple-blue">02</span>
						<p class="text-apple-blue-light text-2xl font-medium">Leading with ingenuity</p>
					</div>
				</div>
				<div
					class="bg-[#EEEEEE] rounded-tl-3xl rounded-br-3xl w-full flex flex-col justify-center items-center"
				>
					<div class="grid gap-3 py-14 px-8 ">
						<span class="text-left text-4xl font-semibold text-apple-blue">03</span>
						<p class="text-apple-blue-light text-2xl font-medium">Building Bridges</p>
					</div>
				</div>
				<div
					class="bg-[#FFC1B5] rounded-tr-3xl rounded-bl-3xl w-full flex flex-col justify-center items-center"
				>
					<div class="grid gap-3 py-14 px-8 ">
						<span class="text-left text-4xl font-semibold text-apple-blue">04</span>
						<p class="text-apple-blue-light text-2xl font-medium">Decoding Success</p>
					</div>
				</div>
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
				<h5 class=" lg:text-3xl text-2xl mt-16">COMPREHENSIVE UNDERSTANDING</h5>
				<p class="lg:text-xl text-lg mt-16 leading-7">
					We specialize in providing expert consulting services across a range of dynamic sectors.
					Our goal is to drive innovation, efficiency, and growth in each of these industries,
					serving both public, private, and philanthropic sectors.
				</p>
			</div>
		</div>
	</div>
</Container>

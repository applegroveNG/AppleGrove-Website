<script>
	import Logo from '$lib/atoms/icons/Logo.svelte';
</script>

<footer>
	<div class="bg-apple-blue-light h-100 w-100">
		<div
			class="container flex flex-col lg:flex-row gap-4 mx-auto justify-between w-full lg:px-14 px-7 py-6 lg:py-12"
		>
			<p class="text-[#EAECF0] text-lg lg:text-xl">
				Stay up to date with the latest news, white papers, and articles.
			</p>
			<form class="flex gap-4 float-right">
				<input
					type="email"
					name=""
					id=""
					class="rounded-lg py-2 w-full text-[#D0D5DD] placeholder:text-[#667085] focus:outline-none px-3 border-2 border-[#D0D5DD] bg-apple-blue"
					placeholder="Enter your email"
				/>
				<button
					type="submit"
					class="py-2 px-5 bg-apple-yellow text-apple-blue rounded-lg font-semibold"
					>Subscribe</button
				>
			</form>
		</div>
	</div>
	<!-- 	
	<div class="bg-apple-blue">
		<div
			class="container flex flex-col text-text-light mx-auto justify-between w-full h-fit px-7 py-6 lg:px-14 lg:py-12"
		>
			<ul class="flex flex-col lg:flex-row justify-between font-semibold w-full h-fit md:text-left lg:gap-16">
				<li class="flex flex-1 flex-col lg:flex-row gap-4 justify-between mb-4">
					<ul class="flex flex-1 w-full flex-col gap-4">

						<a href="/">
							<Logo />
						</a>
						<li>projects@applegrove.co</li>
					</ul>
					<ul class="flex flex-1 w-full flex-col gap-4">
						<li><a href="/services">Services</a></li>
						<li><a href="/services#consulting">Consulting and Advisory Services</a></li>
						<li><a href="/services#strategic">Strategic Project solutions</a></li>
						<li><a href="/services#it">IT Services and Digital Transformation</a></li>
						<li><a href="/services#venture">Venture Development</a></li>
					</ul>
				</li>
				<li class="flex flex-1 w-full flex-col lg:flex-row gap-4 justify-between mb-4">
					<ul class="flex flex-1 w-full flex-col gap-4">
						<li>Company</li>
						<li><a href="/about_us">About Us</a></li>
					</ul>
					<ul class="flex flex-1 w-full flex-col gap-4">
						<li>Insights</li>
						<li>White papers</li>
						<li>Articles</li>
						<li>Infographics</li>
					</ul>
				</li>
				<ul class="flex flex-1 w-full flex-col gap-4">
					<li>Tell us what you want</li>
					<li>
						<a
							href="#top"
							class="bg-[#fffcf5] mt-4 max-w-fit py-2 px-5 font-semibold text-apple-blue rounded-lg"
							>Talk to us for Free!</a
						>
					</li>
				</ul>
			</ul>
			<span class="mt-14"
				>&copy; {new Date().getFullYear()} AppleGrove Advisory Limited. All rights reserved.</span
			>
		</div>
	</div> -->

	<div class="bg-apple-blue">
		<div class="container text-text-light text-sm lg:text-lg mx-auto w-full h-fit px-7 py-6 lg:px-14 lg:py-12">
			<ul class="grid lg:grid-cols-4 xl:grid-cols-5 md:grid-cols-2 mb-12 font-semibold w-full h-fit md:text-left">
				<ul class="flex flex-col gap-4 mb-4 lg:mb-0">
					<li>
						<a href="/">
							<Logo />
						</a>
					</li>
					<li>projects@applegrove.co</li>
				</ul>
				<ul class="flex flex-col gap-4 mb-4 lg:mb-0">
					<li><a href="/services">Services</a></li>
					<li><a href="/services#consulting">Consulting and Advisory Services</a></li>
					<li><a href="/services#strategic">Strategic Project solutions</a></li>
					<li><a href="/services#it">IT Services and Digital Transformation</a></li>
					<li><a href="/services#venture">Venture Development</a></li>
				</ul>
				<ul class="flex flex-col gap-4  mb-4 lg:mb-0">
					<li>Company</li>
					<li><a href="/about_us">About Us</a></li>
				</ul>
				<ul class="flex flex-col gap-4  mb-4 lg:mb-0">
					<li>Insights</li>
					<li>White papers</li>
					<li>Articles</li>
					<li>Infographics</li>
				</ul>
				<ul class=" flex flex-col gap-4 mb-4 lg:mb-0">
					<li>Tell us what you want</li>
					<li>
						<a
							href="/contact_us"
							class="bg-[#fffcf5] mt-4 max-w-fit py-2 px-5 font-semibold text-apple-blue rounded-lg"
							>Talk to us for Free!</a
						>
					</li>
				</ul>
			</ul>
			<span class=""
				>&copy; {new Date().getFullYear()} AppleGrove Advisory Limited. All rights reserved.</span
			>
		</div>
	</div>
</footer>

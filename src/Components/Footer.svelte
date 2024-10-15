<script>
	import Logo from '$lib/atoms/icons/Logo.svelte';
</script>

<footer>
	<div class="bg-apple-blue-light h-100 w-100">
		<div class="container flex mx-auto justify-between w-100 lg:px-14 py-12">
			<p class="text-[#EAECF0] text-xl">
				Stay up to date with the latest news, white papers, and articles.
			</p>
			<form class="flex gap-4">
				<input
					type="email"
					name=""
					id=""
					class="rounded-lg py-2 text-[#D0D5DD] placeholder:text-[#667085] focus:outline-none px-3 border-2 border-[#D0D5DD] bg-apple-blue"
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
	<div class="bg-apple-blue">
		<div
			class="container flex flex-col text-text-light mx-auto justify-between w-100 lg:px-14 py-12"
		>
			<ul class="lg:flex justify-between font-semibold">
				<li>
					<ul class="flex flex-col gap-4">
						<a href="/">
							<Logo />
						</a>
						<li>projects@applegrove.co</li>
					</ul>
				</li>
				<li>
					<ul class="flex flex-col gap-4">
						<li><a href="/services">Services</a></li>
						<li>Consulting and Advisory Services</li>
						<li>Strategic Project solutions</li>
						<li>IT Services and Digital Transformation</li>
						<li>Venture Development</li>
					</ul>
				</li>
				<li>
					<ul class="flex flex-col gap-4">
						<li>Company</li>
						<li>About Us</li>
					</ul>
				</li>
				<li>
					<ul class="flex flex-col gap-4">
						<li>Insights</li>
						<li>White papers</li>
						<li>Articles</li>
						<li>Infographics</li>
					</ul>
				</li>
				<li>
					<ul class="flex flex-col gap-4">
						<li>Tell us what you want</li>
						<li>
							<a
								href="#top"
								class="bg-[#fffcf5] mt-4 max-w-fit py-2 px-5 font-semibold text-apple-blue rounded-lg"
								>Talk to us for Free!</a
							>
						</li>
					</ul>
				</li>
			</ul>
			<span class="mt-14"
				>&copy; {new Date().getFullYear()} AppleGrove Advisory Limited. All rights reserved.</span
			>
		</div>
	</div>
</footer>

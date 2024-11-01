<script>
	import datas from '$lib/assets/data.json';
	import Container from '../../Components/Container.svelte';

	let data = datas[0].contactUs[0];
</script>

<Container>
	<div class="flex bg-apple-blue max-h-[356px] overflow-hidden rounded-3xl px-16">
		<div class="flex-1 flex justify-center flex-col">
			<h1 class="font-semibold text-4xl text-white">{data.title}</h1>
			<p class="text-[#FCFCFD] mt-6 leading-8 max-w-[340px]">{data.text}</p>
		</div>
		<div class="flex-1">
			<img src={data.img} alt="" class="object-center" />
		</div>
	</div>
	<!-- ===================== Contact us form ========================= -->
	<form
		action=""
		class="max-w-[778px] bg-[#f4ad2009] mx-auto mt-4 py-16 justify-center rounded-3xl"
	>
		<ul class="flex flex-col max-w-[512px] mx-auto gap-6">
			<li class="flex flex-col">
				<label class="font-medium text-[#344054] text-sm" for="name">{data.form.name}*</label>
				<input required class="rounded-lg shadow-sm py-3 px-4 border border-[#D0D5DD]" type="text" name="name" id="" placeholder="Your name" />
			</li>
			<li class="flex flex-col">
				<label class="font-medium text-[#344054] text-sm" for="email">{data.form.email}*</label>
				<input required class="rounded-lg shadow-sm py-3 px-4 border border-[#D0D5DD]" type="email" name="email" id="" placeholder="you@company.com" />
			</li>
			<li class="flex flex-col">
				<label class="font-medium text-[#344054] text-sm" for="sector">{data.form.sector}*</label>
				<input required class="rounded-lg shadow-sm  py-3 px-4 border border-[#D0D5DD]" type="text" name="sector" id="" placeholder="Real estate" />
			</li>
			<li class="flex flex-col">
				<label class="font-medium text-[#344054] text-sm" for="help">{data.form.help}</label>
				<textarea
					class="rounded-lg py-3 px-4 border border-[#D0D5DD] shadow-sm"
					rows="8"
					name="help"
					id=""
					placeholder="Tell us a little about the project/business..."
				></textarea>
			</li>
			<button type="submit" class="bg-apple-yellow mt-3 py-3 rounded-lg font-semibold hover:bg-apple-blue-light hover:text-white">{data.btnText}</button>
		</ul>
	</form>
</Container>

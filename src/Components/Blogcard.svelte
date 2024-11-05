<script>
	export let link = '';
	export let category = '';
	export let title = '';
	export let postedDate = '';
	export let thumbnail = '';
	export let userName = '';
	export let userImg = '';
	export let type = "";
</script>

{#if type === 'featured'}
	<a href={link} class="grid gap-4" data-sveltekit-preload-code>
		<div class="grid gap-4">
			<img src={thumbnail} alt={title} class="w-full max-h-[370px] rounded-3xl" />
			<small class="text-warning font-semibold">{category}</small>
			<h2 class="font-semibold text-2xl lg:text-5xl text-apple-blog-text">{title}</h2>
		</div>
		<div class="flex gap-4 items-center">
			<img class="w-14 h-14 rounded-full" src={userImg} alt={userName} />
			<div class="flex flex-col">
				<span class="font-semibold text-[#101828] text-lg">{userName}</span>
				<small class="text-warning">{postedDate}</small>
			</div>
		</div>
	</a>
{:else}
	<a href={link} class="flex flex-col py-6 max-w-[373px] rounded-3xl">
		<article class="grid gap-6">
			<div class="grid gap-3">
				<small class="text-[#344054] font-medium py-2 px-4 text-xs rounded-2xl bg-[#F2F4F7] w-fit"
					>{category}</small
				>
				<h2 class="font-semibold text-xl lg:text-2xl text-[#151D3B]">{title}</h2>
				<div class="flex gap-4 items-center">
					<img class="w-8 h-8 rounded-full" src={userImg} alt={userName} />
					<div class="flex flex-col">
						<span class="font-semibold text-[#101828] text-sm">{userName}</span>
						<small class="text-xs text-warning">{postedDate}</small>
					</div>
				</div>
			</div>
			<img src={thumbnail} alt={title} class="w-full max-h-[234px] rounded-2xl" />
		</article>
	</a>
{/if}

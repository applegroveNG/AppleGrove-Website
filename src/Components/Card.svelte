<!-- a sveltekit component that takes in title, body, image prop and renders it -->
<script>
	import Container from './Container.svelte';
	import Tag from './Tag.svelte';

	export let title = '';
	export let titleStyle = '';
	export let body = '';
	export let pStyle = '';
	export let style = '';
	export let bodyColor = '#FFFFFF';
	export let image = '';
	export let flex = '';
	export let image_width = '546px';
	export let tagText = '';
</script>

<Container {style}>
	{#if tagText}
		<div class="mb-4 lg:mb-10">
			<Tag tag={tagText} />
		</div>
	{/if}
	<div
		class="flex {flex === 'reverse'
			? 'lg:flex-row-reverse'
			: 'lg:flex-row '} flex-col bg-[{bodyColor}] justify-between w-full gap-4"
	>
		<div class="flex-1 flex w-full flex-col gap-8 h-full">
			<h2 class="font-semibold text-4xl lg:text-5xl lg:leading-[72px] text-apple-blue {titleStyle}">
				{title}
			</h2>
			<p class="font-medium text-xl leading-7 lg:w-[504px] {pStyle}">
				{body}
			</p>
		</div>
		<div class="flex-1 w-full">
			{#if image}
				<img src={image} alt={title} class="lg:w-[{image_width}] rounded" />
			{/if}
		</div>
	</div>
</Container>

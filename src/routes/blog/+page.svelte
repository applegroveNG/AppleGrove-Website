<script lang="ts">
	import Blogcard from '../../Components/Blogcard.svelte';
	import Container from '../../Components/Container.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	export const { users, posts } = data;

	//a javascript code to get user image
	function getUserImage(userId: number): string | undefined {
		const user = users.find((user) => user.id === userId);
		return user ? user.avatar : undefined;
	}

	function getUserName(userId: number): string | undefined {
		const user = users.find((user) => user.id === userId);
		return user ? user.username : undefined;
	}
</script>

<svelte:head>
	<title>Apple Grove - Grey Matter</title>
	<meta property=" og:title" content="Grey Matter" />
</svelte:head>

<Container>
	<main>
		<div class="mb-16">
			<h1 class="font-semibold text-apple-blue lg:text-6xl">Grey Matter</h1>
			<p class="text-2xl text-[#1D2939] mt-2">
				Thought leadership on key development trends in Africa
			</p>
		</div>
		{#each posts as blog}
			{#if blog.featured === 1}
				<Blogcard
					type="featured"
					category={blog.categories}
					link={'/blog/' + blog.id}
					postedDate={blog.postedDate}
					thumbnail={blog.thumbnail}
					title={blog.title}
					userImg={getUserImage(blog.userId)}
					userName={getUserName(blog.userId)}
				/>
			{/if}
		{/each}

		<div
			class="grid gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16 mt-16 lg:mt-32"
		>
			{#each posts as blog}
				{#if blog.featured !== 1}
					<Blogcard
						category={blog.categories}
						link={'/blog/' + blog.id}
						postedDate={blog.postedDate}
						thumbnail={blog.thumbnail}
						title={blog.title}
						userImg={getUserImage(blog.userId)}
						userName={getUserName(blog.userId)}
					/>
				{/if}
			{/each}
		</div>
	</main>
</Container>

<script lang="ts">
	import Blogcard from '../../../Components/Blogcard.svelte';
	import Container from '../../../Components/Container.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	const { user, post, users, relatedPost } = data;

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
	<title>Apple Grove - Blog | {post?.title}</title>
	<meta property=" og:title" content={post?.title} />
</svelte:head>

<main>
	<div class="px-2 py-3 lg:px-28 lg:py-6">
		<h6 class="flex items-center gap-1 text-nowrap font-semibold text-lg">
			<a href="/blog">Grey Matter</a>
			<span class="material-symbols-outlined text-[#667085] "> chevron_right </span>
			<p class=" text-[#667085] max-w-[314px] overflow-x-hidden text-nowrap text-ellipsis">
				{post?.title}
			</p>
		</h6>
	</div>
	<hr class="text-[#D0D5DD]" />
	<Container>
		<article>
			<div class="max-w-[876px] mx-auto">
				<div class="grid gap-2">
					<span class="font-semibold text-[#344054]">{post?.categories}</span>
					<h1 class="font-semibold text-2xl md:text-3xl lg:text-5xl text-[#101828]">{post?.title}</h1>
					<p class="mt-2 text-[#667085] text-lg md:text-xl">
						{post?.paragraph}
					</p>
				</div>
				<div class="flex gap-4 mt-8 items-center">
					<img class="w-14 h-14 rounded-full" src={user?.avatar} alt={user?.username} />
					<div class="flex flex-col">
						<span class="font-semibold text-[#101828] text-lg">{user?.username}</span>
						<small class="text-warning">{post?.postedDate}</small>
					</div>
				</div>
			</div>
			<img src={post?.image} class="w-full max-h-[522px] mt-8 lg:mt-16 lg:mb-8 rounded-3xl" alt="" />
			<div class="max-w-[876px] mx-auto">
				<p class="text-[#667085] lg:text-xl">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, quos dignissimos, harum
					ducimus quo tempore error illo, laborum ipsa nesciunt mollitia fuga. Praesentium
					cupiditate, quod hic perferendis veniam quam cum! Reprehenderit exercitationem quos
					dolores qui alias aliquam nulla cumque officia ducimus asperiores, in eos voluptate est ex
					eligendi saepe temporibus perspiciatis tempora amet fugiat nobis? Facilis atque enim quo
					suscipit. Vitae amet quos nisi quo maxime omnis tempora, eos odio reprehenderit non
					voluptatibus dolor minus adipisci ex. Voluptatem, labore nam doloribus dolore voluptatibus
					cumque earum. Earum quod omnis minima animi? Fuga id consequuntur libero, voluptatibus
					quae repellat unde est nihil porro, magnam repellendus explicabo? Vel velit repellat
					aliquid quod voluptatibus. Distinctio rerum quaerat quod earum temporibus aspernatur iure
					a aliquid! Necessitatibus consequuntur porro recusandae aperiam ut quasi, quae voluptates,
					numquam ea aliquam animi aliquid natus ducimus hic. Nihil saepe laudantium blanditiis iste
					ullam suscipit perspiciatis error earum eos. Nam, excepturi! Rerum mollitia sint doloribus
					rem voluptatem, soluta et modi omnis quasi enim quo inventore incidunt similique fugiat
					autem explicabo laudantium sunt eaque, eos necessitatibus recusandae temporibus,
					exercitationem esse suscipit. Error? Consectetur optio quia hic? Saepe fugit eos ipsa,
					iure natus fuga, laborum quia laboriosam dolore libero omnis dicta necessitatibus
					molestiae rerum. Modi aliquam ipsam aspernatur hic recusandae optio error iure. Hic, ullam
					laboriosam! Distinctio quas quidem similique vero, voluptatum veritatis impedit omnis
					provident eius possimus temporibus, qui, animi error accusantium unde veniam. Sit cum
					temporibus rem unde, quidem provident eveniet. Enim, minima aliquam iusto obcaecati ipsum
					molestiae expedita debitis aspernatur alias id beatae ratione maxime eos cupiditate sed
					dolore vel fugiat optio, eveniet commodi! Fugit atque laborum voluptatum aspernatur
					voluptas. Voluptatum dicta, nihil maiores, autem quisquam architecto eligendi ipsam,
					delectus est harum doloribus nam ullam officiis qui earum. Qui consequatur adipisci ut!
					Illo, inventore rerum id fugiat omnis perspiciatis nobis.
				</p>
			</div>
		</article>
	</Container>
	<Container>
		<div class="grid gap-8">
			<h2 class="font-semibold text-2xl lg:text-4xl text-[#101828]">Related articles</h2>
			<span class="text-[#667085] text-lg lg:text-xl"
				>The latest industry news, interviews, technologies, and resources.</span
			>
		</div>
		<div
			class="grid gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16 mt-8 lg:mt-16"
		>
			{#each relatedPost as blog, key}
				{#if blog.id != data.post?.id && key < 3}
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
	</Container>
</main>

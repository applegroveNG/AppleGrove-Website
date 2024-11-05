import type { PageServerLoad } from './$types';
import db from '$lib/assets/blogData.json';
import db_user from '$lib/assets/users.json';

export const load: PageServerLoad = async ({ params }) => {
	const post = db.data.find((post) => String(post.id) === params.slug);
	const relatedPost = db.data.filter(
		(item) => item.categories === post?.categories && item.id !== Number(params.slug)
	);

	return {
		post: post,
		user: db_user.users.find((user) => user.id === post?.userId),
		users: db_user.users,
		relatedPost: relatedPost
	};
};

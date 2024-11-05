import type { PageServerLoad } from './$types';
import db from '$lib/assets/blogData.json';
import db_user from '$lib/assets/users.json';


export const load: PageServerLoad = async () => {

    return {
        posts: db.data,
        users: db_user.users,
    };
};
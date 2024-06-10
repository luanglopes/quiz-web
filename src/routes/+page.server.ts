import { quizzes } from '$lib/quiz/resource/database/quiz';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = () => {
    return { quizzes };
};

export const prerender = true;
export const csr = false;

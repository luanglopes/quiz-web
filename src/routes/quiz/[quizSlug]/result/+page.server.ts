import { quizzes } from '$lib/quiz/resource/database/quiz';
import { error } from '@sveltejs/kit';
import type { EntryGenerator, PageServerLoad } from './$types';

export const load: PageServerLoad = ({ params }) => {
    const quiz = quizzes[params.quizSlug];
    if (!quiz) throw error(404, { message: 'Quiz not found' });
    return { quiz };
};

export const entries: EntryGenerator = () => {
    const quizzesSlugs = Object.keys(quizzes);
    return quizzesSlugs.map((slug) => ({ quizSlug: slug }));
};

export const prerender = true;
export const csr = false;

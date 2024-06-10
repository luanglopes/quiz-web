import { quizzes } from '$lib/quiz/resource/database/quiz';
import { error } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ params }) => {
    const quiz = quizzes[params.quizSlug];
    if (!quiz) throw error(404, { message: 'Quiz not found' });
    return { quiz };
};

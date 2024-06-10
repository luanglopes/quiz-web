import { quizzes } from '$lib/quiz/resource/database/quiz';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params, parent }) => {
    const { quiz } = await parent();
    const question = quiz.questions[params.questionId];
    if (!question) throw error(404, { message: 'Question not found' });
    return { quizSlug: params.quizSlug, question };
};

import type { EntryGenerator } from './$types';

export const entries: EntryGenerator = () => {
    const allRoutes: { quizSlug: string; questionId: string }[] = [];
    Object.keys(quizzes).forEach((quizSlug) => {
        const quiz = quizzes[quizSlug];
        Object.keys(quiz.questions).forEach((questionId) => {
            allRoutes.push({
                quizSlug,
                questionId,
            });
        });
    });
    return allRoutes;
};

export const prerender = true;
export const csr = false;

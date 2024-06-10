import { quizzes } from '$lib/quiz/resource/database/quiz';
import type { EntryGenerator } from './$types';

export const entries: EntryGenerator = () => {
    return Object.keys(quizzes).map((quizSlug) => {
        const quiz = quizzes[quizSlug];
        return {
            ebookSlug: quiz.resultEbookSlug,
        };
    });
};

export const prerender = true;
export const csr = true;

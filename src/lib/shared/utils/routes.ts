export const routes = {
    quiz: (quizSlug: string) => `/quiz/${quizSlug}`,
    quizQuestion: (quizSlug: string, questionId: string) =>
        `/quiz/${quizSlug}/question/${questionId}`,
    quizResult: (quizSlug: string) => `/quiz/${quizSlug}/result`,
};

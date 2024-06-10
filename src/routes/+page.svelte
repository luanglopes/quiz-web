<script lang="ts">
    import { routes } from '$lib/shared/utils/routes';

    const { data } = $props();
</script>

<div class="flex flex-col p-4">
    <h1 class="font-robot mb-6 text-3xl text-gray-500">Quizzes</h1>

    <ul class="flex flex-col gap-4">
        {#each Object.entries(data.quizzes) as [quizSlug, quiz]}
            <li>
                <a
                    href={routes.quizQuestion(quizSlug, quiz.firstQuestionId)}
                    class="text-gray-300 hover:underline">{quiz.name} {'>'}</a
                >
            </li>
        {/each}
    </ul>
</div>

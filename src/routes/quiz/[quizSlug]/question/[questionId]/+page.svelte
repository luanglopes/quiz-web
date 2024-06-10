<script lang="ts">
    import { routes } from '$lib/shared/utils/routes.js';

    let { data } = $props();
    const previousQuestionLink = $derived(
        data.question.previousQuestionId
            ? routes.quizQuestion(data.quizSlug, data.question.previousQuestionId)
            : null,
    );
    const nextQuestionLink = $derived(
        data.question.nextQuestionId
            ? routes.quizQuestion(data.quizSlug, data.question.nextQuestionId)
            : null,
    );
    const resultLink = $derived(
        !data.question.nextQuestionId ? routes.quizResult(data.quizSlug) : null,
    );
</script>

<h1 class="font-robot mb-8 text-3xl text-slate-300">{data.question.text}</h1>

<ul class="flex flex-col gap-4">
    {#each data.question.options as option}
        <li>
            <a
                class="block rounded-md border border-gray-600 bg-gray-800 p-4 text-gray-300 transition-all hover:border-gray-400 hover:bg-slate-800"
                href={nextQuestionLink || resultLink}>{option.text}</a
            >
        </li>
    {/each}
</ul>

{#if previousQuestionLink}
    <a href={previousQuestionLink} class="mt-6 text-slate-500 transition-all hover:text-slate-400">
        {'<'} Voltar</a
    >
{/if}

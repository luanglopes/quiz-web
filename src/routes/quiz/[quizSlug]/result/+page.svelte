<script lang="ts">
    import { routes } from '$lib/shared/utils/routes';
    import Badge from 'lucide-svelte/icons/badge-check';

    const { data } = $props();
</script>

<h1 class="font-robot mb-6 text-center text-4xl">Resultado</h1>

<div class="mb-6 flex justify-center">
    <Badge size={75} />
</div>

<p class="mb-2 text-center">
    Parabéns só de chegar até aqui você já deu o primeiro passo na direção certa.
</p>

<p class="mb-8 text-center">
    E pra te recompensar por isso vamos te indicar um ebook que se encaixa nas suas necessidades e
    vai te levar para os próximos passos!
</p>

<a href={data.quiz.resultCTALink} class="block w-full rounded-md bg-green-700 p-4 text-center">
    Ir para o próximo passo!
</a>

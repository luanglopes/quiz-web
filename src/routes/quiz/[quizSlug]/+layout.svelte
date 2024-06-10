<script lang="ts">
    const { children, data } = $props();
</script>

<div class="flex h-full flex-col overflow-y-auto">
    <span class="pl-4 pt-4 text-slate-400">
        {data.quiz.name}
    </span>

    <div class="flex flex-1 flex-col justify-center px-6 py-4">
        {@render children()}
    </div>
</div>

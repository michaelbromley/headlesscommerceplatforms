<script lang="ts">
    import type { FeatureItem, WithOptionalNote } from '../types';
    import SupportLabel from './SupportLabel.svelte';
    import InfoButton from './InfoButton.svelte';

    export let item: WithOptionalNote<any> | FeatureItem;

    const isArray = Array.isArray(item.value);
</script>

<div class='flex flex-wrap'>
    {#if item.value.support}
        <SupportLabel support={item.value.support} />
    {:else if isArray}
        {#each item.value as subItem}
            <div
                class="inline-flex items-center px-2 py-0.5 m-0.5 rounded text-xs bg-gray-100 text-gray-800"
            >
                {subItem}
            </div>
        {/each}
    {:else}
        <div
            class="inline-flex items-center px-2 py-0.5 m-0.5 rounded text-xs bg-gray-100 text-gray-800"
        >
            {item.value}
        </div>
    {/if}
    <InfoButton label={item.note}></InfoButton>
</div>

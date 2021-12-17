<script lang="ts">
    import type { FeatureItem, WithOptionalNote } from '../types';
    import SupportLabel from './SupportLabel.svelte';
    import InfoButton from './InfoButton.svelte';

    export let item: WithOptionalNote<any> | FeatureItem;

    const isArray = Array.isArray(item.value);
</script>

<div class="flex flex-wrap">
    {#if item.value.support}
        <SupportLabel support={item.value.support}>
            <InfoButton label={item.note} />
            {#each item.urls || [] as url}
                <a href={url} title={'Reference: ' + url} target='_blank'>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-4 w-4 text-gray-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"
                        />
                        <path
                            d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"
                        />
                    </svg>
                </a>
            {/each}
        </SupportLabel>
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
</div>

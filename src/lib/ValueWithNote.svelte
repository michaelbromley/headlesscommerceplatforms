<script lang="ts">
    import type { FeatureItem, WithOptionalNote } from '../types';

    export let item: WithOptionalNote<any> | FeatureItem;
    console.log(item);
</script>

<div>
    {#if item.value.support}
        {item.value.support}
    {:else}
        {item.value}
    {/if}
</div>

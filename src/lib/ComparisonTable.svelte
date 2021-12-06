<script lang="ts">
    import ValueWithNote from './ValueWithNote.svelte';
    import type { SolutionInfo } from '../types';
    import { camelToSentence } from '$lib/utils';

    export let table: { data: SolutionInfo[] };

    const properties = Object.keys(table.data[0]).filter(x => !['name', 'website', 'type'].includes(x));
    console.log({ properties });
</script>

<div class="flex flex-col">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table class="min-w-full divide-y divide-gray-200">
                    <tbody class="bg-white divide-y divide-gray-200">
                        <tr
                            ><td class='px-6 py-4 whitespace-nowrap'>Solution</td>
                            {#each table.data as solution}
                                <td class='px-6 py-4 whitespace-nowrap'><strong>{solution.name}</strong></td>
                            {/each}
                        </tr>
                        <tr
                            ><td class='px-6 py-4 whitespace-nowrap'>website</td>
                            {#each table.data as solution}
                                <td class='px-6 py-4 whitespace-nowrap'><a href={solution.website}>{solution.website}</a></td>
                            {/each}
                        </tr>
                        {#each properties as prop}
                            <tr>
                                <td class='px-6 py-4 whitespace-nowrap'>{camelToSentence(prop)}</td>
                                {#each table.data as solution}
                                    <td class='px-6 py-4 whitespace-nowrap'><ValueWithNote item={solution[prop]} /></td>
                                {/each}
                            </tr>
                        {/each}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>

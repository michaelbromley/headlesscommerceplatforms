<script lang="ts">
    import ValueWithNote from './ValueWithNote.svelte';
    import InfoButton from './InfoButton.svelte';
    import type { SolutionInfo } from '../types';
    import { camelToSentence, getLabel } from '$lib/utils';

    export let table: { data: SolutionInfo[] };

    const properties = Object.keys(table.data[0]).filter(
        (x) => !['name', 'website', 'type'].includes(x)
    );
</script>

<div class="flex flex-col text-sm">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table class="min-w-full divide-y divide-gray-200">
                    <tbody class="bg-white divide-y divide-gray-200">
                        <tr
                            ><td class="px-5 py-3 whitespace-nowrap sticky left-0 bg-gray-100">Solution</td>
                            {#each table.data as solution}
                                <td class="px-5 py-3 whitespace-nowrap"
                                    ><strong>{solution.name}</strong></td
                                >
                            {/each}
                        </tr>
                        <tr
                            ><td class="px-5 py-3 whitespace-nowrap bg-gray-100">website</td>
                            {#each table.data as solution}
                                <td class="px-5 py-3 whitespace-nowrap"
                                    ><a
                                    class='text-blue-600 hover:text-blue-500'
                                    href={solution.website}>{solution.website}</a></td
                                >
                            {/each}
                        </tr>
                        {#each properties as prop}
                            <tr class="group">
                                <td class="px-5 py-3 whitespace-nowrap group-hover:bg-gray-50 bg-gray-100"
                                    >
                                    <div class='flex space-x-2'>
                                    <span>{camelToSentence(prop)}</span>
                                    <InfoButton label={getLabel(prop)}></InfoButton>
                                    </div>
                                </td
                                >
                                {#each table.data as solution}
                                    <td class="px-5 py-3 whitespace-nowrap group-hover:bg-gray-50"
                                        ><ValueWithNote item={solution[prop]} /></td
                                    >
                                {/each}
                            </tr>
                        {/each}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>

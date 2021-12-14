<script context="module" lang="ts">
    export const prerender = true;

    /** @type {import('@sveltejs/kit').Load} */
    export async function load({ page, fetch, session, stuff }) {
        const tableData = `/table-data.json`;
        const res = await fetch(tableData);

        if (res.ok) {
            return {
                props: {
                    table: await res.json()
                }
            };
        }

        return {
            status: res.status,
            error: new Error(`Could not load ${tableData}`)
        };
    }
</script>

<script lang="ts">
    import ComparisonTable from '$lib/ComparisonTable.svelte';
	export let table;

</script>

<svelte:head>
    <title>Home</title>
</svelte:head>

<ComparisonTable {table}></ComparisonTable>

<style>
</style>

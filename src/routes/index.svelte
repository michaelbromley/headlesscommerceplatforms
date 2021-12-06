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
    section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: 1;
    }

    h1 {
        width: 100%;
    }

    .welcome {
        position: relative;
        width: 100%;
        height: 0;
        padding: 0 0 calc(100% * 495 / 2048) 0;
    }

    .welcome img {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        display: block;
    }
</style>

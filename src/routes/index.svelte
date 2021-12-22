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
    import EditForm from '$lib/EditForm.svelte';
    export let table;
    let description = 'A community-driven feature comparison of modern headless e-commerce platforms';
</script>

<svelte:head>
    <title>Headless Commerce Platforms</title>
    <meta name="description" content={description} />
    <meta name="twitter:card" content='summary_large_image' />
    <meta name="twitter:title" content='Headless Commerce Platforms' />
    <meta name="twitter:handle" content='@michlbrmly' />
    <meta property="og:url" content='https://headlesscommerceplatforms.com' />
    <meta property="og:type" content='website' />
    <meta property="og:title" content='Headless Commerce Platforms' />
    <meta property="og:description" content={description} />
    <meta property="og:image" content='/banner.jpg' />
    <meta property="og:image:width" content='877' />
    <meta property="og:image:height" content='438' />
</svelte:head>

<ComparisonTable {table} />
<EditForm />

<style>
</style>

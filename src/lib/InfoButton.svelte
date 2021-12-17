<script type="ts">
    import type { SolutionInfo } from '../types';
    import { getLabel } from '$lib/utils';

    export let label: string;
    let visible = false;
    function show() {
        visible = true;
    }
    function hide() {
        visible = false;
    }
    function toggle() {
        visible = !visible;
    }
</script>

<div class="relative flex opacity-0 group-hover:opacity-100 transition-opacity" class:hidden={!label}>
    <button
        on:mouseenter={show}
        on:mouseleave={hide}
        on:click={toggle}
        type="button"
        class="inline-flex items-center rounded-sm text-gray-400 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
        >
            <path
                fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clip-rule="evenodd"
            />
        </svg>
    </button>
    <div class="absolute top-6 -left-12 p-2 bg-indigo-500 text-white rounded shadow z-10 w-32 whitespace-normal" class:block={visible} class:hidden={!visible}>{label}</div>
</div>

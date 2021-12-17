import { writable } from 'svelte/store';

export const modal = writable<{
    solutionName: string;
    feature: string;
}>();

/** @type {import('@sveltejs/kit').RequestHandler} */
import * as fs from 'fs';
import type { SolutionInfo } from '../types';
import * as path from 'path';

export async function get({ params }) {
    const solutions = fs.readdirSync('src/solutions');
    const data: SolutionInfo[] = [];

    for (const fileName of solutions) {
        const solutionData = await import(`../src/solutions/${fileName}`);
        data.push(solutionData.default);
    }

    return {
        body: {
            data
        }
    };
}

/** @type {import('@sveltejs/kit').RequestHandler} */
import type { SolutionInfo } from '../types';
import vendure from '../solutions/vendure';
import medusa from '../solutions/medusa';
import sylius from '../solutions/sylius';
import saleor from '../solutions/saleor';

export async function get({ params }) {


    return {
        body: {
            data: [vendure, saleor, sylius, medusa]
        }
    };
}

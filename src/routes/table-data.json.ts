/** @type {import('@sveltejs/kit').RequestHandler} */
import type { SolutionInfo } from '../types';
import vendure from '../solutions/vendure';
import medusa from '../solutions/medusa';
import sylius from '../solutions/sylius';
import saleor from '../solutions/saleor';
import crystallize from '../solutions/crystallize';

export async function get({ params }) {


  return {
        body: {
            data: [vendure, saleor, sylius, medusa, crystallize]
        }
    };
}

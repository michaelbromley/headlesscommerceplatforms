<script type="ts">
    import { modal } from './stores';
    import type { SupportLevel } from '../types';

    const supportLevels: { [level in SupportLevel]: string } = {
        full: 'Fully supported by default',
        partial: 'Partial support (please explain in notes)',
        'paid-extension': 'Supported via a paid extension',
        'free-extension': 'Supported via a free extension',
        none: 'No support',
        unknown: 'Support not known'
    };

    let submitted = false;
    let formIsValid = false;

    let modalData: {
        solutionName: string;
        feature: string;
    } | null = null;

    modal.subscribe((value) => {
        modalData = value;
        submitted = false;
    });

    function close() {
        modal.set(null);
    }
    function encode(data) {
        return Object.keys(data)
            .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
            .join('&');
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        let myForm = event.target;
        let formData = new FormData(myForm).entries();
        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({
                ...Object.fromEntries(formData)
            })
        })
            .then(() => {
                submitted = true;
                (myForm as HTMLFormElement).reset();
            })
            .catch((error) => alert(error));
    };

    const checkFormValidity = () => {
        formIsValid = (document.querySelector('#edit-form') as HTMLFormElement)?.checkValidity();
    }
</script>

<!-- This example requires Tailwind CSS v2.0+ -->
<div
    class="fixed z-10 inset-0 overflow-y-auto"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
    class:hidden={modalData == null}
>
    <div class="flex justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
            class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            aria-hidden="true"
        />

        <!-- This element is to trick the browser into centering the modal contents. -->
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true"
            >&#8203;</span
        >
        <div
            class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl w-full sm:p-6"
        >
            <div class="block absolute top-0 right-0 pt-4 pr-4">
                <button
                    on:click={close}
                    type="button"
                    class="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    <span class="sr-only">Close</span>
                    <!-- Heroicon name: outline/x -->
                    <svg
                        class="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
            </div>
            <div>
                <div class="">
                    <h3 class="leading-6 font-medium text-gray-600" id="modal-title">
                        Suggest correction to <span class="text-green-600"
                            >{modalData?.feature}</span
                        >
                        support in <span class="text-blue-600">{modalData?.solutionName}</span>
                    </h3>
                    <div class="mt-2" class:hidden={submitted}>
                        <form id="edit-form" class="space-y-4" data-netlify="true" on:submit={handleSubmit} on:input={checkFormValidity}>
                            <input type="hidden" name="form-name" value="feature-correction" />
                            <input
                                type="hidden"
                                name="solutionName"
                                value={modalData?.solutionName}
                            />
                            <input type="hidden" name="feature" value={modalData?.feature} />
                            <div
                                class="flex flex-col space-y-8 sm:space-y-0 sm:flex-row sm:space-x-6"
                            >
                                <fieldset>
                                    <legend class="sr-only">Plan</legend>
                                    <div class="space-y-3">
                                        {#each Object.entries(supportLevels) as [level, description]}
                                            <div class="relative flex items-start">
                                                <div class="flex items-center h-5">
                                                    <input
                                                        id={level}
                                                        aria-describedby={level + '-description'}
                                                        required
                                                        name="supportLevel"
                                                        type="radio"
                                                        value={level}
                                                        class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                                    />
                                                </div>
                                                <div class="ml-3 text-sm">
                                                    <label
                                                        for={level}
                                                        class="font-medium text-gray-700"
                                                        >{level}</label
                                                    >
                                                    <p
                                                        id={level + '-description'}
                                                        class="text-gray-500"
                                                    >
                                                        {description}
                                                    </p>
                                                </div>
                                            </div>
                                        {/each}
                                    </div>
                                </fieldset>
                                <div>
                                    <div>
                                        <label
                                            for="comment"
                                            class="block text-sm font-medium text-gray-700"
                                            >Evidence & Notes</label
                                        >
                                        <div class="mt-1">
                                            <textarea
                                                placeholder="E.g. links to documentation showing support, or issues asking for support in case of no support"
                                                rows="4"
                                                name="notes"
                                                id="comment"
                                                class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label
                                            for="email"
                                            class="block text-sm font-medium text-gray-700"
                                            >Email</label
                                        >
                                        <div class="mt-1">
                                            <input
                                                type="email"
                                                name="emailAddress"
                                                id="email"
                                                class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                placeholder="you@example.com"
                                                aria-describedby="email-description"
                                            />
                                        </div>
                                        <p
                                            class="mt-2 text-sm text-gray-500"
                                            id="email-description"
                                        >
                                            In case we have any follow-up questions
                                        </p>
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={!formIsValid}
                                        class:opacity-50={!formIsValid}
                                        class="inline-flex items-center mt-12 px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        <span>Submit</span>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class:hidden={!submitted} class="p-12">
                        <div class="flex justify-center text-green-700">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-16 w-16"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </div>
                        <p class="text-lg text-center text-green-800 py-6">Thank you!</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

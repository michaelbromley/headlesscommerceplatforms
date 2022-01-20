import type { SelfHostedFrameworkInfo } from '../types';

const template: SelfHostedFrameworkInfo = {
    name: 'Crystallize',
    website: 'https://crystallize.com/',
    type: 'selfHosted',
    language: { value: 'TypeScript' },
    license: { value: '' },
    underlyingFramework: { value: 'NestJS' },
    supportedDatabases: { value: ['MongoDB'] },
    storefrontApi: { value: ['graphql'] },
    adminApi: { value: ['graphql'] },
    productVariants: {
        value: { support: 'full' },
        note: '',
        urls: ['https://crystallize.com/learn/concepts/pim/product']
    },
    configurableProducts: { value: { support: 'full' }, note: '', urls: [] },
    bundleProducts: { value: { support: 'full' }, note: '', urls: [] },
    stockTracking: {
        value: { support: 'full' },
        note: '',
        urls: ['https://crystallize.com/blog/managing-stock-locations-in-crystallize']
    },
    multiWarehouse: {
        value: { support: 'full' },
        note: '',
        urls: ['https://crystallize.com/blog/managing-stock-locations-in-crystallize']
    },
    productSearch: {
        value: { support: 'full' },
        note: '',
        urls: ['https://crystallize.com/learn/developer-guides/search-api']
    },
    facetedSearch: {
        value: { support: 'full' },
        note: '',
        urls: [
            'https://crystallize.com/learn/developer-guides/search-api',
            'https://crystallize.com/learn/developer-guides/search-api/search-products-by-attributes'
        ]
    },
    productCategories: {
        value: { support: 'full' },
        note: '',
        urls: ['https://crystallize.com/blog/product-taxonomy-using-topic-maps']
    },
    customAttributes: {
        value: { support: 'full' },
        note: '',
        urls: [
            'https://crystallize.com/learn/developer-guides/catalogue-api/fetching-an-item/components'
        ]
    },
    tieredPricing: {
        value: { support: 'full' },
        note: '',
        urls: ['https://crystallize.com/learn/concepts/ecommerce/price-variant']
    },
    assetManagement: { value: { support: 'full' }, note: '', urls: [] },
    multiStore: { value: { support: 'full' }, note: '', urls: [] },
    multiCurrency: {
        value: { support: 'full' },
        note: '',
        urls: ['https://crystallize.com/learn/concepts/ecommerce/currency']
    },
    multiLanguage: {
        value: { support: 'full' },
        note: '',
        urls: ['https://crystallize.com/learn/concepts/pim/multilingual']
    },
    promotions: {
        value: { support: 'partial' },
        note: 'Available and fully supported in our open source boilerplates',
        urls: ['https://crystallize.com/learn/livestreams/shop-examples/gift-cards-and-vouchers']
    },
    voucherCodes: {
        value: { support: 'partial' },
        note: 'Available and fully supported in our open source boilerplates',
        urls: ['https://crystallize.com/learn/livestreams/shop-examples/gift-cards-and-vouchers']
    },
    freeShipping: { value: { support: 'full' }, note: '', urls: [] },
    giftCards: {
        value: { support: 'partial' },
        note: 'Available and fully supported in our open source boilerplates',
        urls: ['https://crystallize.com/learn/livestreams/shop-examples/gift-cards-and-vouchers']
    },
    guestCheckout: { value: { support: 'full' }, note: '', urls: [] },
    orderProcessIsConfigurable: {
        value: { support: 'full' },
        note: '',
        urls: ['https://crystallize.com/learn/developer-guides/order-api/fulfilment-pipelines']
    },
    adminCreatedOrders: {
        value: { support: 'partial' },
        note: 'Supported through service boilerplate, which interacts with PIM system',
        urls: [
            'https://crystallize.com/learn/developer-guides/order-api/creating-orders',
            'https://crystallize.com/learn/developer-guides/order-api'
        ]
    },
    multipleFulfillments: {
        value: { support: 'full' },
        note: '',
        urls: [
            'https://crystallize.com/learn/developer-guides/order-api/fulfilment-pipelines',
            'https://crystallize.com/learn/user-guides/orders-and-fulfilment'
        ]
    },
    returns: { value: { support: 'full' }, note: '', urls: [] },
    invoiceGeneration: {
        value: { support: 'partial' },
        note: 'Available and fully supported in our open source boilerplates',
        urls: []
    },
    customerAccounts: {
        value: { support: 'full' },
        note: 'Fully supported in our open source boilerplates',
        urls: []
    },
    customerMultipleAddresses: {
        value: { support: 'full' },
        note: '',
        urls: []
    },
    customerOrderHistory: { value: { support: 'full' }, note: '', urls: [] },
    customerGroups: { value: { support: 'full' }, note: '', urls: [] },
    thirdPartyAuth: {
        value: { support: 'full' },
        note: '',
        urls: ['https://crystallize.com/learn/developer-guides/api-overview/authentication']
    },
    wishlists: { value: { support: 'partial' }, note: '', urls: [] },
    adminInterface: { value: { support: 'full' }, note: '', urls: [] },
    sso: {
        value: { support: 'full' },
        note: '',
        urls: ['https://crystallize.com/learn/developer-guides/access-tokens']
    },
    adminInterfaceIsThemeable: {
        value: { support: 'partial' },
        note: 'Users can add their logo',
        urls: []
    },
    adminInterfaceLocalizable: { value: { support: 'none' }, note: '', urls: [] },
    roleBasedAccessControl: { value: { support: 'none' }, note: '', urls: [] }
};

export default template;

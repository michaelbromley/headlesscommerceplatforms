import type { FeatureItem, SelfHostedFrameworkInfo } from '../types';

const features: SelfHostedFrameworkInfo = {
    name: 'Saleor',
    website: 'https://saleor.io',
    type: 'selfHosted',
    language: { value: 'Python' },
    license: { value: 'BSD 3-Clause' },
    underlyingFramework: { value: 'Django' },
    supportedDatabases: { value: ['Postgres'] },
    storefrontApi: { value: ['graphql'] },
    adminApi: { value: ['graphql'] },

    // Inventory features
    productVariants: {
        value: { support: 'full' },
        urls: ['https://docs.saleor.io/docs/3.0/developer/products']
    },
    configurableProducts: {
        value: { support: 'full' },
        urls: ['https://docs.saleor.io/docs/3.0/developer/metadata']
    },
    bundleProducts: { value: { support: 'unknown' } },
    stockTracking: { value: { support: 'full' } },
    multiWarehouse: { value: { support: 'full' } },
    productSearch: {
        value: { support: 'full' },
        urls: [
            'https://docs.saleor.io/docs/3.0/developer/api-reference/inputs/product-filter-input#search-string'
        ]
    },
    facetedSearch: {
        value: { support: 'full' },
        urls: [
            'https://docs.saleor.io/docs/3.0/developer/api-reference/inputs/product-filter-input'
        ]
    },
    productCategories: {
        value: { support: 'full' },
        urls: ['https://docs.saleor.io/docs/2.10/dashboard/catalog/categories']
    },
    customAttributes: {
        value: { support: 'full' },
        urls: ['https://docs.saleor.io/docs/2.10/developer/metadata']
    },
    tieredPricing: {
        value: { support: 'partial' },
        note: 'Can be implemented via a plugin',
        urls: [
            'https://docs.saleor.io/docs/3.0/developer/extending/plugins',
            'https://github.com/saleor/saleor/blob/695297b7c74b1f970c5a111980f0213518a76dbf/saleor/plugins/base_plugin.py#L140'
        ]
    },
    assetManagement: {
        value: { support: 'full' },
        note: 'Images and files both on variant and product level'
    },

    // Localization features
    multiStore: {
        value: { support: 'full' },
        urls: ['https://docs.saleor.io/docs/3.0/dashboard/channels']
    },
    multiCurrency: {
        value: { support: 'full' },
        urls: ['https://docs.saleor.io/docs/3.0/dashboard/channels']
    },
    multiLanguage: { value: { support: 'full' } },

    // Promotion & marketing features
    promotions: { value: { support: 'full' } },
    voucherCodes: {
        value: { support: 'full' },
        urls: ['https://docs.saleor.io/docs/3.0/dashboard/discounts/vouchers']
    },
    freeShipping: {
        value: { support: 'full' },
        urls: ['https://docs.saleor.io/docs/3.0/dashboard/discounts/vouchers']
    },
    giftCards: {
        value: { support: 'full' },
        urls: ['https://docs.saleor.io/docs/3.0/developer/api-reference/objects/gift-card']
    },

    // Order features
    guestCheckout: { value: { support: 'full' } },
    orderProcessIsConfigurable: { value: { support: 'unknown' } },
    adminCreatedOrders: { value: { support: 'full' } },
    multipleFulfillments: { value: { support: 'full' } },
    returns: { value: { support: 'unknown' } },
    invoiceGeneration: {
        value: { support: 'full' },
        urls: ['https://docs.saleor.io/docs/3.0/developer/api-reference/mutations/invoice-create']
    },

    // Customer features
    customerAccounts: { value: { support: 'full' } },
    customerMultipleAddresses: {
        value: { support: 'full' },
        urls: ['https://docs.saleor.io/docs/2.9.0/dashboard/customers#managing-customer-addresses']
    },
    customerOrderHistory: {
        value: { support: 'full' },
        urls: ['https://docs.saleor.io/docs/2.9.0/dashboard/customers#customer-orders-and-history']
    },
    customerGroups: {
        value: { support: 'partial' },
        note: 'Can approximate by assigning to channels or using metadata fields',
        urls: ['https://github.com/saleor/saleor/issues/4048']
    },
    thirdPartyAuth: {
        value: { support: 'paid-extension' },
        note: 'Available via saleor cloud',
        urls: ['https://github.com/saleor/saleor/issues/5119']
    },
    wishlists: { value: { support: 'unknown' } },

    // Administration features
    adminInterface: { value: { support: 'full' } },
    sso: {
        value: { support: 'paid-extension' },
        note: 'Available via Saleor Cloud',
        urls: ['https://github.com/saleor/saleor/discussions/7413']
    },
    adminInterfaceIsThemeable: { value: { support: 'none' } },
    adminInterfaceLocalizable: { value: { support: 'full' } },
    roleBasedAccessControl: {
        value: { support: 'partial' },
        note: 'Can choose from a selection of pre-defined roles'
    }
};

export default features;

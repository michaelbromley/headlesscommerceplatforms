import type { FeatureItem, SelfHostedFrameworkInfo } from '../types';

const features: SelfHostedFrameworkInfo = {
    name: 'Medusa',
    website: 'https://www.medusajs.com',
    type: 'selfHosted',
    language: { value: 'JavaScript/TypeScript' },
    license: { value: 'MIT' },
    underlyingFramework: { value: 'Express' },
    supportedDatabases: { value: ['Postgres', 'SQLite'] },
    storefrontApi: { value: ['REST'] },
    adminApi: { value: ['REST'] },

    // Inventory features
    productVariants: { value: { support: 'full' } },
    configurableProducts: { value: { support: 'unknown' } },
    bundleProducts: { value: { support: 'unknown' } },
    stockTracking: { value: { support: 'full' } },
    multiWarehouse: { value: { support: 'none' } },
    productSearch: {
        value: { support: 'free-plugin' },
        url: 'https://docs.medusajs.com/add-plugins/meilisearch'
    },
    facetedSearch: {
        value: { support: 'free-plugin' },
        url: 'https://docs.medusajs.com/add-plugins/meilisearch'
    },
    productCategories: {
        value: { support: 'full' },
        url: 'https://docs.medusajs.com/api/admin/collection/'
    },
    customAttributes: { value: { support: 'none' } },
    tieredPricing: { value: { support: 'unknown' } },
    assetManagement: { value: { support: 'none' } },

    // Localization features
    multiStore: { value: { support: 'none' } },
    multiCurrency: { value: { support: 'full' } },
    multiLanguage: { value: { support: 'none' } },

    // Promotion & marketing features
    promotions: { value: { support: 'full' }, url: 'https://docs.medusajs.com/api/admin/discount' },
    voucherCodes: {
        value: { support: 'full' },
        url: 'https://docs.medusajs.com/api/admin/discount'
    },
    freeShipping: {
        value: { support: 'none' }
    },
    giftCards: { value: { support: 'full' }, url: 'https://docs.medusajs.com/api/admin/gift-card' },

    // Order features
    guestCheckout: { value: { support: 'unknown' } },
    orderProcessIsConfigurable: { value: { support: 'unknown' } },
    multipleFulfillments: { value: { support: 'full' } },
    adminCreatedOrders: { value: { support: 'full' } },
    returns: {
        value: { support: 'full' },
        url: 'https://docs.medusajs.com/guides/fulfillment-api'
    },
    invoiceGeneration: { value: { support: 'unknown' } },

    // Customer features
    customerAccounts: { value: { support: 'full' } },
    customerMultipleAddresses: { value: { support: 'full' } },
    customerOrderHistory: { value: { support: 'full' } },
    customerGroups: { value: { support: 'none' } },
    thirdPartyAuth: { value: { support: 'unknown' } },
    wishlists: {
        value: { support: 'free-plugin' },
        url: 'https://github.com/medusajs/medusa/tree/master/packages/medusa-plugin-wishlist'
    },

    // Administration features
    adminInterface: { value: { support: 'full' } },
    sso: { value: { support: 'unknown' } },
    adminInterfaceIsThemeable: { value: { support: 'none' } },
    adminInterfaceLocalizable: { value: { support: 'none' } },
    roleBasedAccessControl: { value: { support: 'none' } }
};

export default features;

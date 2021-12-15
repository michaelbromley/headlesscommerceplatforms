import type { FeatureItem, SelfHostedFrameworkInfo } from '../types';

const features: SelfHostedFrameworkInfo = {
    name: 'Vendure',
    website: 'https://www.vendure.io',
    type: 'selfHosted',
    language: { value: 'TypeScript' },
    license: { value: 'MIT' },
    underlyingFramework: { value: 'NestJS' },
    supportedDatabases: { value: ['MySQL', 'MariaDB', 'Postgres', 'SQLite'] },
    storefrontApi: { value: ['graphql'] },
    adminApi: { value: ['graphql'] },

    // Inventory features
    productVariants: { value: { support: 'full' } },
    configurableProducts: { value: { support: 'full' } },
    bundleProducts: { value: { support: 'none' } },
    stockTracking: { value: { support: 'full' } },
    multiWarehouse: { value: { support: 'none' } },
    productSearch: { value: { support: 'full' } },
    facetedSearch: { value: { support: 'full' } },
    productCategories: { value: { support: 'full' } },
    customAttributes: { value: { support: 'full' } },
    tieredPricing: {
        value: { support: 'partial' },
        note: 'Can be implemented with custom strategy'
    },
    assetManagement: { value: { support: 'full' } },

    // Localization features
    multiStore: { value: { support: 'full' } },
    multiCurrency: { value: { support: 'full' } },
    multiLanguage: { value: { support: 'full' } },

    // Promotion & marketing features
    promotions: { value: { support: 'full' } },
    voucherCodes: { value: { support: 'full' } },
    freeShipping: { value: { support: 'full' } },
    giftCards: { value: { support: 'paid-plugin' } },

    // Order features
    guestCheckout: { value: { support: 'full' } },
    orderProcessIsConfigurable: { value: { support: 'full' } },
    adminCreatedOrders: {
        value: { support: 'none' },
        note: 'Can be implemented as a custom plugin'
    },
    multipleFulfillments: { value: { support: 'full' } },
    returns: {
        value: { support: 'partial' },
        note: 'Data model supports it, but GraphQL mutation must be implemented by user'
    },
    invoiceGeneration: { value: { support: 'none' } },

    // Customer features
    customerAccounts: { value: { support: 'full' } },
    customerMultipleAddresses: { value: { support: 'full' } },
    customerOrderHistory: { value: { support: 'full' } },
    customerGroups: { value: { support: 'full' } },
    thirdPartyAuth: {
        value: { support: 'full' },
        url: 'https://www.vendure.io/docs/developer-guide/authentication/#'
    },
    wishlists: { value: { support: 'paid-plugin' } },

    // Administration features
    adminInterface: {
        value: { support: 'full' },
        url: 'https://www.vendure.io/docs/typescript-api/admin-ui-plugin/'
    },
    sso: {
        value: { support: 'full' },
        url: 'https://www.vendure.io/docs/developer-guide/authentication/#'
    },
    adminInterfaceIsThemeable: {
        value: { support: 'full' },
        url: 'https://www.vendure.io/docs/plugins/extending-the-admin-ui/admin-ui-theming-branding/'
    },
    adminInterfaceLocalizable: {
        value: { support: 'full' },
        note: '13+ languages supported out-of-the-box, custom translations can be added',
        url: 'https://www.vendure.io/docs/plugins/extending-the-admin-ui/adding-ui-translations/'
    },
    roleBasedAccessControl: { value: { support: 'full' } }
};

export default features;

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
    configurableProducts: { value: { support: 'full' }, urls: ['https://www.vendure.io/docs/developer-guide/customizing-models/#configurable-order-products'] },
    bundleProducts: { value: { support: 'none' } },
    stockTracking: { value: { support: 'full' }, urls: ['https://www.vendure.io/docs/developer-guide/stock-control/'] },
    multiWarehouse: { value: { support: 'none' } },
    productSearch: { value: { support: 'full' } },
    facetedSearch: { value: { support: 'full' }, urls: ['https://www.vendure.io/docs/user-guide/catalog/facets/'] },
    productCategories: { value: { support: 'full' }, urls: ['https://www.vendure.io/docs/user-guide/catalog/collections/'] },
    customAttributes: { value: { support: 'full' }, urls: ['https://www.vendure.io/docs/developer-guide/customizing-models/'] },
    tieredPricing: {
        value: { support: 'partial' },
        note: 'Can be implemented with custom strategy',
        urls: ['https://www.vendure.io/docs/typescript-api/orders/order-item-price-calculation-strategy/']
    },
    assetManagement: { value: { support: 'full' }, urls: ['https://www.vendure.io/docs/typescript-api/asset-server-plugin/'] },

    // Localization features
    multiStore: { value: { support: 'full' }, urls: ['https://www.vendure.io/docs/developer-guide/channels/'] },
    multiCurrency: { value: { support: 'full' }, urls: ['https://www.vendure.io/docs/developer-guide/channels/'] },
    multiLanguage: { value: { support: 'full' }, urls: ['https://www.vendure.io/docs/typescript-api/entities/interfaces/#translatable'] },

    // Promotion & marketing features
    promotions: { value: { support: 'full' }, urls: ['https://www.vendure.io/docs/developer-guide/promotions/'] },
    voucherCodes: { value: { support: 'full' }, urls: ['https://www.vendure.io/docs/developer-guide/promotions/'] },
    freeShipping: { value: { support: 'full' }, urls: ['https://www.vendure.io/docs/developer-guide/promotions/'] },
    giftCards: { value: { support: 'paid-extension' } },

    // Order features
    guestCheckout: { value: { support: 'full' }, urls: ['https://www.vendure.io/docs/user-guide/customers/'] },
    orderProcessIsConfigurable: { value: { support: 'full' }, urls: ['https://www.vendure.io/docs/developer-guide/customizing-the-order-process/'] },
    adminCreatedOrders: {
        value: { support: 'none' },
        note: 'Can be implemented as a custom plugin'
    },
    multipleFulfillments: { value: { support: 'full' }, urls: ['https://www.vendure.io/docs/developer-guide/shipping/#fulfillments'] },
    returns: {
        value: { support: 'partial' },
        note: 'Data model supports it, but GraphQL mutation must be implemented by user'
    },
    invoiceGeneration: { value: { support: 'none' } },

    // Customer features
    customerAccounts: { value: { support: 'full' }, urls: ['https://www.vendure.io/docs/storefront/shop-api-guide/#customer-account-management'] },
    customerMultipleAddresses: { value: { support: 'full' }, urls: ['https://www.vendure.io/docs/graphql-api/admin/object-types/#customer'] },
    customerOrderHistory: { value: { support: 'full' }, urls: ['https://www.vendure.io/docs/graphql-api/admin/object-types/#customer'] },
    customerGroups: { value: { support: 'full' }, urls: ['https://www.vendure.io/docs/user-guide/customers/#customer-groups'] },
    thirdPartyAuth: {
        value: { support: 'full' },
        urls: ['https://www.vendure.io/docs/developer-guide/authentication/#']
    },
    wishlists: { value: { support: 'paid-extension' } },

    // Administration features
    adminInterface: {
        value: { support: 'full' },
        urls: ['https://www.vendure.io/docs/typescript-api/admin-ui-plugin/']
    },
    sso: {
        value: { support: 'full' },
        urls: ['https://www.vendure.io/docs/developer-guide/authentication/#']
    },
    adminInterfaceIsThemeable: {
        value: { support: 'full' },
        urls: ['https://www.vendure.io/docs/plugins/extending-the-admin-ui/admin-ui-theming-branding/']
    },
    adminInterfaceLocalizable: {
        value: { support: 'full' },
        note: '13+ languages supported out-of-the-box, custom translations can be added',
        urls: ['https://www.vendure.io/docs/plugins/extending-the-admin-ui/adding-ui-translations/']
    },
    roleBasedAccessControl: { value: { support: 'full' }, urls: ['https://www.vendure.io/docs/user-guide/settings/administrators-roles/'] }
};

export default features;

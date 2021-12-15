import type { FeatureItem, SelfHostedFrameworkInfo } from '../types';

const features: SelfHostedFrameworkInfo = {
    name: 'Sylius',
    website: 'https://sylius.com',
    type: 'selfHosted',
    language: { value: 'PHP' },
    license: { value: 'MIT' },
    underlyingFramework: { value: 'Symfony' },
    supportedDatabases: {
        value: ['MySQL'],
        note: 'Other DB supported but migration support only for MySQL',
        url: 'https://docs.sylius.com/en/latest/book/installation/requirements.html?highlight=database'
    },
    storefrontApi: { value: ['REST'], url: 'https://master.demo.sylius.com/api/v2/docs' },
    adminApi: { value: ['REST'], url: 'https://master.demo.sylius.com/api/v2/docs' },

    // Inventory features
    productVariants: { value: { support: 'full' } },
    configurableProducts: { value: { support: 'unknown' } },
    bundleProducts: { value: { support: 'unknown' } },
    stockTracking: { value: { support: 'unknown' } },
    multiWarehouse: { value: { support: 'paid-plugin' }, url: 'https://sylius.com/plus/' },
    productSearch: { value: { support: 'unknown' } },
    facetedSearch: { value: { support: 'unknown' } },
    productCategories: { value: { support: 'unknown' } },
    customAttributes: { value: { support: 'unknown' } },
    tieredPricing: { value: { support: 'unknown' } },
    assetManagement: { value: { support: 'unknown' } },

    // Localization features
    multiStore: { value: { support: 'paid-plugin' }, url: 'https://sylius.com/plus/' },
    multiCurrency: { value: { support: 'unknown' } },
    multiLanguage: { value: { support: 'full' } },

    // Promotion & marketing features
    promotions: { value: { support: 'full' } },
    voucherCodes: { value: { support: 'full' } },
    freeShipping: { value: { support: 'full' } },
    giftCards: { value: { support: 'none' }, url: 'https://github.com/Sylius/Sylius/issues/10127' },

    // Order features
    guestCheckout: { value: { support: 'unknown' } },
    orderProcessIsConfigurable: { value: { support: 'unknown' } },
    adminCreatedOrders: { value: { support: 'unknown' } },
    multipleFulfillments: { value: { support: 'paid-plugin' }, url: 'https://sylius.com/plus/' },
    returns: { value: { support: 'paid-plugin' }, url: 'https://sylius.com/plus/' },
    invoiceGeneration: { value: { support: 'unknown' } },

    // Customer features
    customerAccounts: { value: { support: 'unknown' } },
    customerMultipleAddresses: { value: { support: 'unknown' } },
    customerOrderHistory: { value: { support: 'unknown' } },
    customerGroups: { value: { support: 'unknown' } },
    thirdPartyAuth: { value: { support: 'unknown' } },
    wishlists: { value: { support: 'unknown' } },

    // Administration features
    adminInterface: { value: { support: 'unknown' } },
    sso: { value: { support: 'unknown' } },
    adminInterfaceIsThemeable: { value: { support: 'unknown' } },
    adminInterfaceLocalizable: { value: { support: 'unknown' } },
    roleBasedAccessControl: { value: { support: 'paid-plugin' }, url: 'https://sylius.com/plus/' }
};

export default features;

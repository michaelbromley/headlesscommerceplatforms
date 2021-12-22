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
        urls: ['https://docs.sylius.com/en/latest/book/installation/requirements.html?highlight=database']
    },
    storefrontApi: { value: ['REST'], urls: ['https://master.demo.sylius.com/api/v2/docs'] },
    adminApi: { value: ['REST'], urls: ['https://master.demo.sylius.com/api/v2/docs'] },

    // Inventory features
    productVariants: { value: { support: 'full' } },
    configurableProducts: { value: { support: 'unknown' } },
    bundleProducts: { value: { support: 'unknown' } },
    stockTracking: { value: { support: 'full' } },
    multiWarehouse: { value: { support: 'paid-extension' }, urls: ['https://sylius.com/plus/'] },
    productSearch: { value: { support: 'unknown' } },
    facetedSearch: { value: { support: 'unknown' } },
    productCategories: { value: { support: 'full' } },
    customAttributes: { value: { support: 'full' }, urls: ['https://docs.sylius.com/en/latest/book/products/attributes.html?highlight=attributes'] },
    tieredPricing: { value: { support: 'unknown' } },
    assetManagement: { value: { support: 'unknown' } },

    // Localization features
    multiStore: { value: { support: 'paid-extension' }, urls: ['https://sylius.com/plus/'] },
    multiCurrency: { value: { support: 'unknown' } },
    multiLanguage: { value: { support: 'full' } },

    // Promotion & marketing features
    promotions: { value: { support: 'full' } },
    voucherCodes: { value: { support: 'full' } },
    freeShipping: { value: { support: 'full' } },
    giftCards: { value: { support: 'none' }, urls: ['https://github.com/Sylius/Sylius/issues/10127'] },

    // Order features
    guestCheckout: { value: { support: 'full' }, urls: ['https://docs.sylius.com/en/latest/cookbook/shop/disabling-guest-checkout.html?highlight=guest'] },
    orderProcessIsConfigurable: { value: { support: 'full' }, urls: ['https://docs.sylius.com/en/latest/components_and_bundles/bundles/SyliusOrderBundle/index.html'] },
    adminCreatedOrders: { value: { support: 'unknown' } },
    multipleFulfillments: { value: { support: 'paid-extension' }, urls: ['https://sylius.com/plus/'] },
    returns: { value: { support: 'paid-extension' }, urls: ['https://sylius.com/plus/'] },
    invoiceGeneration: { value: { support: 'free-extension' }, urls: ['https://github.com/Sylius/InvoicingPlugin/'] },

    // Customer features
    customerAccounts: { value: { support: 'full' } },
    customerMultipleAddresses: { value: { support: 'unknown' } },
    customerOrderHistory: { value: { support: 'full' } },
    customerGroups: { value: { support: 'full' }, urls: ['https://docs.sylius.com/en/latest/components_and_bundles/components/User/models.html?highlight=customergroup#customergroup'] },
    thirdPartyAuth: { value: { support: 'unknown' } },
    wishlists: { value: { support: 'none' }, note: 'A community plugin is available' },

    // Administration features
    adminInterface: { value: { support: 'full' } },
    sso: { value: { support: 'unknown' } },
    adminInterfaceIsThemeable: { value: { support: 'partial' }, urls: ['https://docs.sylius.com/en/latest/cookbook/frontend/admin-js-and-css.html?highlight=admin%20language'] },
    adminInterfaceLocalizable: { value: { support: 'unknown' } },
    roleBasedAccessControl: { value: { support: 'paid-extension' }, urls: ['https://sylius.com/plus/'] }
};

export default features;

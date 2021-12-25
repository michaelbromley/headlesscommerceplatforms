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
        urls: [
            'https://docs.sylius.com/en/latest/book/installation/requirements.html?highlight=database'
        ]
    },
    storefrontApi: { value: ['REST'], urls: ['https://master.demo.sylius.com/api/v2/docs'] },
    adminApi: { value: ['REST'], urls: ['https://master.demo.sylius.com/api/v2/docs'] },

    // Inventory features
    productVariants: { value: { support: 'full' } },
    configurableProducts: {
        value: { support: 'full' },
        urls: ['https://docs.sylius.com/en/1.11/getting-started-with-sylius/first-product.html']
    },
    bundleProducts: {
        value: { support: 'free-extension' },
        urls: ['https://github.com/BitBagCommerce/SyliusProductBundlePlugin']
    },
    stockTracking: { value: { support: 'full' } },
    multiWarehouse: { value: { support: 'paid-extension' }, urls: ['https://sylius.com/plus/'] },
    productSearch: {
        value: { support: 'free-extension' },
        urls: [
            'https://github.com/BitBagCommerce/SyliusElasticsearchPlugin',
            'https://github.com/monsieurbiz/SyliusSearchPlugin'
        ]
    },
    facetedSearch: {
        value: { support: 'free-extension' },
        urls: [
            'https://github.com/BitBagCommerce/SyliusElasticsearchPlugin',
            'https://github.com/monsieurbiz/SyliusSearchPlugin'
        ]
    },
    productCategories: { value: { support: 'full' } },
    customAttributes: {
        value: { support: 'full' },
        urls: [
            'https://docs.sylius.com/en/latest/book/products/attributes.html?highlight=attributes'
        ]
    },
    tieredPricing: {
        value: { support: 'free-extension' },
        urls: ['https://github.com/Brille24/SyliusTierpricePlugin']
    },
    assetManagement: {
        value: { support: 'partial' },
        note: 'No dedicated UI for that, but it is achievable with Symfony asset management'
    },

    // Localization features
    multiStore: {
        value: { support: 'full' },
        note: 'In Sylius you can launch as many stores (via "channels"), as you wish. Sylius is ready for multi-everything: currencies, countries, locales, tax zones, etc. Sylius Plus additionally provides separate legal entities and customer pools to the already existing logic',
        urls: ['https://sylius.com/plus/']
    },
    multiCurrency: {
        value: { support: 'full' },
        note: 'Sylius supports all currencies in the world',
        urls: ['https://docs.sylius.com/en/1.11/book/configuration/currencies.html']
    },
    multiLanguage: { value: { support: 'full' } },

    // Promotion & marketing features
    promotions: { value: { support: 'full' } },
    voucherCodes: { value: { support: 'full' } },
    freeShipping: { value: { support: 'full' } },
    giftCards: {
        value: { support: 'free-extension' },
        urls: [
            'https://github.com/Sylius/Sylius/issues/10127',
            'https://github.com/Setono/SyliusGiftCardPlugin'
        ]
    },

    // Order features
    guestCheckout: {
        value: { support: 'full' },
        urls: [
            'https://docs.sylius.com/en/latest/cookbook/shop/disabling-guest-checkout.html?highlight=guest'
        ]
    },
    orderProcessIsConfigurable: {
        value: { support: 'full' },
        urls: [
            'https://docs.sylius.com/en/latest/components_and_bundles/bundles/SyliusOrderBundle/index.html'
        ]
    },
    adminCreatedOrders: { value: { support: 'unknown' } },
    multipleFulfillments: {
        value: { support: 'paid-extension' },
        urls: ['https://sylius.com/plus/']
    },
    returns: { value: { support: 'paid-extension' }, urls: ['https://sylius.com/plus/'] },
    invoiceGeneration: {
        value: { support: 'free-extension' },
        urls: ['https://github.com/Sylius/InvoicingPlugin/']
    },

    // Customer features
    customerAccounts: { value: { support: 'full' } },
    customerMultipleAddresses: { value: { support: 'unknown' } },
    customerOrderHistory: { value: { support: 'full' } },
    customerGroups: {
        value: { support: 'full' },
        urls: [
            'https://docs.sylius.com/en/latest/components_and_bundles/components/User/models.html?highlight=customergroup#customergroup'
        ]
    },
    thirdPartyAuth: {
        value: { support: 'full' },
        note: 'Sylius is 100% Symfony, so every Symfony bundle is fully compatible with Sylius, and we use this one: https://github.com/hwi/HWIOAuthBundle',
        urls: ['https://docs.sylius.com/en/1.11/cookbook/shop/facebook-login.html']
    },
    wishlists: {
        value: { support: 'free-extension' },
        note: 'A community plugin is available',
        urls: ['https://github.com/BitBagCommerce/SyliusWishlistPlugin']
    },

    // Administration features
    adminInterface: { value: { support: 'full' } },
    sso: {
        value: { support: 'partial' },
        urls: [
            'https://docs.sylius.com/en/1.11/book/api/authorization.html?highlight=authentication'
        ]
    },
    adminInterfaceIsThemeable: {
        value: { support: 'partial' },
        urls: [
            'https://docs.sylius.com/en/latest/cookbook/frontend/admin-js-and-css.html?highlight=admin%20language'
        ]
    },
    adminInterfaceLocalizable: {
        value: { support: 'full' },
        urls: ['https://docs.sylius.com/en/latest/book/configuration/locales.html'],
        note: 'Sylius supports all languages in the world, the translations are submitted via Crowdin. Not all are full, but the most popular languages globally are.'
    },
    roleBasedAccessControl: {
        value: { support: 'paid-extension' },
        urls: ['https://sylius.com/plus/']
    }
};

export default features;

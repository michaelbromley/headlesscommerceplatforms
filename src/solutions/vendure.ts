import type { SelfHostedFrameworkInfo } from '../types';

export default {
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
    /** A single product can have many variants, e.g. t-shirt sizes */
    productVariants: { value: { support: 'full' } },
    /** e.g. adding an engraving to a mug - the text is configurable */
    configurableProducts: { value: { support: 'full' } },
    /** Products composed of other products, which can be purchased as a single order line */
    bundleProducts: { value: { support: 'none' } },
    /** Stock levels are tracked when orders are placed or new stock comes in */
    stockTracking: { value: { support: 'full' } },
    /** Ability to search products by keyword */
    productSearch: { value: { support: 'full' } },
    /** Ability to filter products by facet/attributes */
    facetedSearch: { value: { support: 'full' } },
    /** Ability to groups products together into hierarchies */
    productCategories: { value: { support: 'full' } },
    /** Ability to define arbitrary fields on products to store custom data */
    customAttributes: { value: { support: 'full' } },
    /** Pricing can change depending on quantity ordered */
    tieredPricing: {
        value: { support: 'partial' },
        note: 'Can be implemented with custom strategy'
    },
    /** Ability to manage uploaded images and other assets */
    assetManagement: { value: { support: 'full' } },

    // Localization features
    /** Multiple distinct stores can be run from a single instance */
    multiStore: { value: { support: 'full' } },
    /** Products can have multiple currencies specified */
    multiCurrency: { value: { support: 'full' } },
    /** Product data can be made available in multiple languages */
    multiLanguage: { value: { support: 'full' } },

    // Promotion & marketing features
    /** Promotions can be applied to discount orders */
    promotions: { value: { support: 'full' } },
    /** Voucher codes can be used to trigger promotions */
    voucherCodes: { value: { support: 'full' } },
    /** Promotions can make the shipping free */
    freeShipping: { value: { support: 'full' } },
    /** Ability to issue gift cards and redeem them against orders */
    giftCards: { value: { support: 'paid-plugin' } },

    // Order features
    /** Customers can checkout without registering an account */
    guestCheckout: { value: { support: 'full' } },
    /** The workflow of placing an order can be tailored to match the business processes */
    orderProcessIsConfigurable: { value: { support: 'full' } },
    /** A single order can be fulfilled in multiple batches */
    multipleFulfillments: { value: { support: 'full' } },
    /** Invoices can be generated for orders */
    invoiceGeneration: { value: { support: 'none' } },

    // Customer features
    /** Customers can create accounts */
    customerAccounts: { value: { support: 'full' } },
    /** Customers can store multiple shipping addresses */
    customerMultipleAddresses: { value: { support: 'full' } },
    /** Customers can access the details of their previous orders */
    customerOrderHistory: { value: { support: 'full' } },
    /** Customers can be grouped, e.g. "B2B customers" might get a special price */
    customerGroups: { value: { support: 'full' } },
    /** Can integrate with 3rd party auth e.g. social logins */
    thirdPartyAuth: { value: { support: 'full' } },
    /** Customers can save products to a wishlist */
    wishlists: { value: { support: 'paid-plugin' } },

    // Administration features
    /** There is an admin interface for managing inventory, orders, customers etc. */
    adminInterface: { value: { support: 'full' } },
    /** Single-sign-on or other existing authentication providers can be used to authenticate administrators */
    sso: { value: { support: 'full' } },
    /** The admin interface can be themed to match colors/logos of company */
    adminInterfaceIsThemeable: { value: { support: 'full' } },
    /** The admin interface is available in multiple languages */
    adminInterfaceLocalizable: { value: { support: 'full' } },
    /** Access to features can be controlled based on roles assigned to administrators */
    roleBasedAccessControl: { value: { support: 'full' } }
} as SelfHostedFrameworkInfo;

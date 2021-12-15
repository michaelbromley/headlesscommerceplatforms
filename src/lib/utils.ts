import type { FeatureItem, SolutionInfo, WithOptionalNote } from '../types';

export function camelToSentence(input: string): string {
    const result = input.replace(/([A-Z])/g, ' $1');
    return result.charAt(0).toUpperCase() + result.slice(1);
}

export function getLabel(propertyName: string): string {
    return propertyLabel[propertyName] ?? '';
}

const propertyLabel: { [K in keyof SolutionInfo]: string } = {
    type: '',
    name: 'The name of the solution',
    website: 'The website url of the solution',
    storefrontApi: 'Does this solution expose an API for storefront operations?',
    adminApi: 'Does this solution expose an API for administrative operations?',
    productVariants: 'A single product can have many variants, e.g. t-shirt sizes',
    configurableProducts: 'e.g. adding an engraving to a mug - the text is configurable',
    bundleProducts:
        'Products composed of other products, which can be purchased as a single order line',
    stockTracking: 'Stock levels are tracked when orders are placed or new stock comes in',
    multiWarehouse: 'Stock can be tracked across multiple warehouse locations',
    productSearch: 'Ability to search products by keyword',
    facetedSearch: 'Ability to filter products by facet/attributes',
    productCategories: 'Ability to groups products together into hierarchies',
    customAttributes: 'Ability to define arbitrary fields on products to store custom data',
    tieredPricing: 'Pricing can change depending on quantity ordered',
    assetManagement: 'Ability to manage uploaded images and other assets',
    // Localization features
    multiStore: 'Multiple distinct stores can be run from a single instance',
    multiCurrency: 'Products can have multiple currencies specified',
    multiLanguage: 'Product data can be made available in multiple languages',
    // Promotion & marketing features
    promotions: 'Promotions can be applied to discount orders',
    voucherCodes: 'Voucher codes can be used to trigger promotions',
    freeShipping: 'Promotions can make the shipping free',
    giftCards: 'Ability to issue gift cards and redeem them against orders',
    // Order features
    guestCheckout: 'Customers can checkout without registering an account',
    orderProcessIsConfigurable:
        'The workflow of placing an order can be tailored to match the business processes',
    adminCreatedOrders: 'Orders can be created by the administrator',
    multipleFulfillments: 'A single order can be fulfilled in multiple batches',
    returns: 'Does the system handle returns of goods',
    invoiceGeneration: 'Invoices can be generated for orders',
    // Customer features
    customerAccounts: 'Customers can create accounts',
    customerMultipleAddresses: 'Customers can store multiple shipping addresses',
    customerOrderHistory: 'Customers can access the details of their previous orders',
    customerGroups: 'Customers can be grouped, e.g. "B2B customers" might get a special price',
    thirdPartyAuth: 'Can integrate with 3rd party auth e.g. social logins',
    wishlists: 'Customers can save products to a wishlist',
    // Administration features
    adminInterface: 'There is an admin interface for managing inventory, orders, customers etc.',
    sso: 'Single-sign-on or other existing authentication providers can be used to authenticate administrators',
    adminInterfaceIsThemeable: 'The admin interface can be themed to match colors/logos of company',
    adminInterfaceLocalizable: 'The admin interface is available in multiple languages',
    roleBasedAccessControl:
        'Access to features can be controlled based on roles assigned to administrators'
};

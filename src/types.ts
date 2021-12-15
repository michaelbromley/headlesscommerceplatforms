export type WithOptionalNote<T> = { value: T; note?: string; url?: string; }
export type SupportLevel = 'full' | 'partial' | 'paid-plugin' | 'free-plugin'  | 'none' | 'unknown';
export type FeatureItem = WithOptionalNote<{ support: SupportLevel; }>;

export interface FeatureList {
    // Inventory features
    /** A single product can have many variants, e.g. t-shirt sizes */
    productVariants: FeatureItem;
    /** e.g. adding an engraving to a mug - the text is configurable */
    configurableProducts: FeatureItem;
    /** Products composed of other products, which can be purchased as a single order line */
    bundleProducts: FeatureItem;
    /** Stock levels are tracked when orders are placed or new stock comes in */
    stockTracking: FeatureItem;
    /** Stock can be tracked across multiple warehouse locations */
    multiWarehouse: FeatureItem;
    /** Ability to search products by keyword */
    productSearch: FeatureItem;
    /** Ability to filter products by facet/attributes */
    facetedSearch: FeatureItem;
    /** Ability to groups products together into hierarchies */
    productCategories: FeatureItem;
    /** Ability to define arbitrary fields on products to store custom data */
    customAttributes: FeatureItem;
    /** Pricing can change depending on quantity ordered */
    tieredPricing: FeatureItem;
    /** Ability to manage uploaded images and other assets */
    assetManagement: FeatureItem;

    // Localization features
    /** Multiple distinct stores can be run from a single instance */
    multiStore: FeatureItem;
    /** Products can have multiple currencies specified */
    multiCurrency: FeatureItem;
    /** Product data can be made available in multiple languages */
    multiLanguage: FeatureItem;

    // Promotion & marketing features
    /** Promotions can be applied to discount orders */
    promotions: FeatureItem;
    /** Voucher codes can be used to trigger promotions */
    voucherCodes: FeatureItem;
    /** Promotions can make the shipping free */
    freeShipping: FeatureItem;
    /** Ability to issue gift cards and redeem them against orders */
    giftCards: FeatureItem;

    // Order features
    /** Customers can checkout without registering an account */
    guestCheckout: FeatureItem;
    /** The workflow of placing an order can be tailored to match the business processes */
    orderProcessIsConfigurable: FeatureItem;
    /** Orders can be created by the administrator */
    adminCreatedOrders: FeatureItem;
    /** A single order can be fulfilled in multiple batches */
    multipleFulfillments: FeatureItem;
    /** Does the system handle returns of goods */
    returns: FeatureItem;
    /** Invoices can be generated for orders */
    invoiceGeneration: FeatureItem;


    // Customer features
    /** Customers can create accounts */
    customerAccounts: FeatureItem;
    /** Customers can store multiple shipping addresses */
    customerMultipleAddresses: FeatureItem;
    /** Customers can access the details of their previous orders */
    customerOrderHistory: FeatureItem;
    /** Customers can be grouped, e.g. "B2B customers" might get a special price */
    customerGroups: FeatureItem;
    /** Can integrate with 3rd party auth e.g. social logins */
    thirdPartyAuth: FeatureItem;
    /** Customers can save products to a wishlist */
    wishlists: FeatureItem;

    // Administration features
    /** There is an admin interface for managing inventory, orders, customers etc. */
    adminInterface: FeatureItem;
    /** Single-sign-on or other existing authentication providers can be used to authenticate administrators */
    sso: FeatureItem;
    /** The admin interface can be themed to match colors/logos of company */
    adminInterfaceIsThemeable: FeatureItem;
    /** The admin interface is available in multiple languages */
    adminInterfaceLocalizable: FeatureItem;
    /** Access to features can be controlled based on roles assigned to administrators */
    roleBasedAccessControl: FeatureItem;
}

export interface SelfHostedFrameworkInfo extends SolutionInfo {
    type: 'selfHosted';
    /** The primary language the framework is written in */
    language: WithOptionalNote<'TypeScript' | 'PHP' | 'JavaScript' | string>;
    /** If open-source, the license used by the project, e.g. MIT */
    license: WithOptionalNote<string | 'none'>;
    /** The underlying framework, e.g. Symfony, NestJS, Spring */
    underlyingFramework: WithOptionalNote<string | 'none'>;
    /** The databases supported */
    supportedDatabases: WithOptionalNote<string[]>;

}

export interface SaaSInfo {
    type: 'saas';
}

export interface SolutionInfo extends FeatureList {
    type: 'saas' | 'selfHosted';
    /** The name of the solution */
    name: string;
    /** The website url of the solution */
    website: string;
    /** Does this solution expose an API for storefront operations? */
    storefrontApi: WithOptionalNote<Array<'graphql' | 'REST' | 'none'>>;
    /** Does this solution expose an API for administrative operations? */
    adminApi: WithOptionalNote<Array<'graphql' | 'REST' | 'none'>>;
}

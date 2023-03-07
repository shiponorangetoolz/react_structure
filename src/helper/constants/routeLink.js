import * as HIDDEN_KEYS from "./routeKeysConstant";
import { AGENCY_PRICE_SETTING_KEY, BALANCE_SETTING_KEY } from "./routeKeysConstant";

const routeLink = {
    dashboard: {
        name: "Dashboard",
        to: "/dashboard",
        path: "dashboard",
        hidden_key: HIDDEN_KEYS.DASHBOARD_ROUTE_KEY,
    },

    clients: {
        name: "Clients",
        to: "/clients",
        path: "clients",
        hidden_key: HIDDEN_KEYS.CLIENT_ROUTE_KEY,
    },
    services: {
        name: "Services",
        to: "/services",
        path: "services",
        hidden_key: HIDDEN_KEYS.SERVICES_ROUTE_KEY,
    },
    packages: {
        name: "Packages",
        to: "/packages",
        path: "packages",
        hidden_key: HIDDEN_KEYS.PACKAGE_ROUTE_KEY,
    },
    add_new_package: {
        name: "Add New Package",
        to: "/packages/new-package",
        path: "packages/new-package",
        hidden_key: HIDDEN_KEYS.PACKAGE_ROUTE_KEY,
    },
    edit_package: {
        name: "Edit Package",
        to: "/packages/edit-package",
        path: "packages/edit-package",
        hidden_key: HIDDEN_KEYS.PACKAGE_ROUTE_KEY,
    },

    app_integration: {
        name: "App Integration",
        to: "/integrations/app",
        path: "integrations/app",
        hidden_key: HIDDEN_KEYS.APP_INTEGRATION_ROUTE_KEY,
    },
    payment_integration: {
        name: "Payment Integration",
        to: "/integrations/payment",
        path: "integrations/payment",
        hidden_key: HIDDEN_KEYS.APP_PAYMENT_ROUTE_KEY,
    },

    zapier_integration: {
        name: "Zapier Integration",
        to: "/integrations/zapier",
        path: "integrations/zapier",
        hidden_key: HIDDEN_KEYS.APP_ZAPIER_ROUTE_KEY,
    },

    webHook_integration: {
        name: "Webhook Integration",
        to: "/integrations/webhook",
        path: "integrations/webhook",
        hidden_key: HIDDEN_KEYS.APP_WEBHOOK_ROUTE_KEY,
    },

    support: {
        name: "Support",
        to: "/support",
        path: "support",
        hidden_key: HIDDEN_KEYS.SUPPORTS_ROUTE_KEY,
    },

    notification: {
        name: "Notification",
        to: "/notification",
        path: "notification",
        hidden_key: "",
    },
    activityLog: {
        name: "Activity Log",
        to: "/activity-log",
        path: "activity-log",
        hidden_key: "",
    },

    account_settings: {
        name: "Account Settings",
        to: "/settings/account",
        path: "settings/account",
        hidden_key: HIDDEN_KEYS.ACCOUNT_SETTING_KEY,
    },

    agency_settings: {
        name: "Agency Settings",
        to: "/settings/agency",
        path: "settings/agency",
        hidden_key: HIDDEN_KEYS.AGENCY_SETTING_KEY,
    },
    white_level_settings: {
        name: "White Level Settings",
        to: "/settings/white-level",
        path: "settings/white-level",
        hidden_key: HIDDEN_KEYS.WHITE_LEVEL_SETTING_KEY,
    },

    system_email: {
        name: "System Email Settings",
        to: "/settings/system-email",
        path: "settings/system-email",
        hidden_key: HIDDEN_KEYS.SYSTEM_EMAIL_KEY,
    },

    email_provider: {
        name: "Email Provider Settings",
        to: "/settings/email-provider",
        path: "settings/email-provider",
        hidden_key: HIDDEN_KEYS.EMAIL_PROVIDER_SETTING_KEY,
    },

    smsProvider: {
        name: "SMS Provider Settings",
        to: "/settings/sms-provider",
        path: "settings/sms-provider",
        hidden_key: HIDDEN_KEYS.SMS_PROVIDER_SETTING_KEY,
    },

    priceSettings: {
        name: "Price Settings",
        to: "/settings/price",
        path: "settings/price",
        hidden_key: HIDDEN_KEYS.AGENCY_PRICE_SETTING_KEY,
    },

    agency_staff: {
        name: "Agency Staff",
        to: "/settings/agency-staff",
        path: "settings/agency-staff",
        hidden_key: HIDDEN_KEYS.AGENCY_STAFF_SETTING_KEY,
    },
    clientPayments: {
        name: "Client Payments",
        to: "/settings/client-payments",
        path: "settings/client-payments",
        hidden_key: HIDDEN_KEYS.CLIENT_PAYMENT_SETTING_KEY,
    },

    agencyBilling: {
        name: "Agency Billing",
        to: "/settings/agency-billing",
        path: "settings/agency-billing",
        hidden_key: HIDDEN_KEYS.AGENCY_BILLING_SETTING_KEY,
    },
    revenue_agency_billing: {
        name: "Revenue Model",
        to: "/settings/agency-billing",
        path: "settings/agency-billing",
        hidden_key: HIDDEN_KEYS.AGENCY_BILLING_SETTING_KEY,
    },

    settings_balance: {
        name: "Balance",
        to: "/settings/balance",
        path: "settings/balance",
        hidden_key: HIDDEN_KEYS.BALANCE_SETTING_KEY,
    },

    privacy_policy: {
        name: "Privacy Policy",
        to: "/settings/privacy-policy",
        path: "settings/privacy-policy",
        hidden_key: HIDDEN_KEYS.PRIVACY_POLICY_SETTING_KEY,
    },

    general_settings: {
        name: "General Settings",
        to: "/settings/general",
        path: "settings/general",
        hidden_key: HIDDEN_KEYS.GENERAL_SETTING_KEY,
    },

    // authentication route
    login: {
        name: "Login",
        to: "/login",
        path: "/login",
    },
    forgot: {
        name: "Forgot Password",
        to: "/forgot",
        path: "/forgot",
    },
    forgotVerification: {
        name: "Forgot Password Verification",
        to: "/forgot/verification",
        path: "forgot/verification",
    },
    passwordSet: {
        name: "Password Set",
        to: "/password/set",
        path: "password/set",
    },
    register: {
        name: "Register",
        to: "/register",
        path: "register",
    },
    registerVerification: {
        name: "Register Verification",
        to: "/register/verification",
        path: "register/verification",
    },

    // public route
    agencyPrivacyPolicy: {
        name: "Privacy Policy",
        to: "/privacy/policy",
        path: "privacy/policy",
    },
    packagePricing: {
        name: "Package Pricing",
        to: "/package/pricing",
        path: "package/pricing",
    },

    packageByeOnboard: {
        name: "Package onBoard",
        to: "/package/buy", // "/package/buy/:package_uid"
        path: "package/buy", // "package/buy/:package_uid"
    },
    packageRenewOnboard: {
        name: "Package Renew",
        to: "/package/renew", // "/package/buy/:package_uid"
        path: "package/renew", // "package/buy/:package_uid"
    },
    // ## User Panel Route
    switchAccount: {
        name: "Switch Account",
        to: "/client/switch/account",
        path: "client/switch/account",
    },
};

export default routeLink;

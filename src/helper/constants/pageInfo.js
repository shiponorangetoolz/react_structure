import routeLink from "./routeLink";

export const agencyDashboardInfo = {
    title: "Dashboard ",
    breadcrumbs: [
        {
            name: "Dashboard",
            path: routeLink.dashboard.to,
        },
    ],
};

export const clientPageInfo = {
    title: "Clients",
    breadcrumbs: [
        {
            name: "Dashboard",
            path: routeLink.dashboard.to,
        },
        {
            name: "Clients",
            path: "/clients",
        },
    ],
};

export const servicesPageInfo = {
    title: "Services",
    breadcrumbs: [
        {
            name: "Dashboard",
            path: routeLink.dashboard.to,
        },
        {
            name: "Services",
            path: "/services",
        },
    ],
};

export const packagePageInfo = {
    title: "Packages",
    breadcrumbs: [
        {
            name: "Dashboard",
            path: routeLink.dashboard.to,
        },
        {
            name: "Agency Package",
            path: "/packages",
        },
    ],
};

export const editPackageInfo = {
    title: "Edit Package",
    breadcrumbs: [
        {
            name: "Dashboard",
            path: routeLink.dashboard.to,
        },
        {
            name: "Agency Package",
            path: routeLink.packages.to,
        },
        {
            name: "Edit Package",
            path: "/edit-package",
        },
    ],
};

export const appIntegrationPageInfo = {
    title: "App Integration",
    breadcrumbs: [
        {
            name: "Dashboard",
            path: routeLink.dashboard.to,
        },
        {
            name: "Integrations",
            path: "",
        },
        {
            name: "App Integration",
            path: "/integrations/app",
        },
    ],
};

export const paymentIntegrationPageInfo = {
    title: "Payment Integration",
    breadcrumbs: [
        {
            name: "Dashboard",
            path: routeLink.dashboard.to,
        },
        {
            name: "Integrations",
            path: "",
        },
        {
            name: "Payment Integration",
            path: "/integrations/payment",
        },
    ],
};

export const supportPageInfo = {
    title: "Support",
    breadcrumbs: [
        {
            name: "Dashboard",
            path: routeLink.dashboard.to,
        },
        {
            name: "Support",
            path: "/support",
        },
    ],
};

export const notificationPageInfo = {
    title: "Notification",
    breadcrumbs: [
        {
            name: "Dashboard",
            path: routeLink.dashboard.to,
        },
        {
            name: "Notification",
            path: routeLink.notification.to,
        },
    ],
};

export const activityLogPageInfo = {
    title: "Activity Log",
    breadcrumbs: [
        {
            name: "Dashboard",
            path: routeLink.dashboard.to,
        },
        {
            name: "Activity Log",
            path: routeLink.activityLog.to,
        },
    ],
};

// ## Setting pages info
export const accountSettingsPageInfo = {
    title: "Account Settings",
    breadcrumbs: [
        {
            name: "Dashboard",
            path: routeLink.dashboard.to,
        },
        {
            name: "Settings",
            path: "",
        },
        {
            name: "Account Settings",
            path: "/settings/account",
        },
    ],
};

export const agencySettingsPageInfo = {
    title: "Agency Settings",
    breadcrumbs: [
        {
            name: "Dashboard",
            path: routeLink.dashboard.to,
        },
        {
            name: "Settings",
            path: "",
        },
        {
            name: "Agency Settings",
            path: "/settings/agency",
        },
    ],
};

export const whiteLevelSettingsPageInfo = {
    title: "White Level Settings",
    breadcrumbs: [
        {
            name: "Dashboard",
            path: routeLink.dashboard.to,
        },
        {
            name: "Settings",
            path: "",
        },
        {
            name: "White Level Settings",
            path: "/settings/white-level",
        },
    ],
};

export const systemEmailSettingsPageInfo = {
    title: "System Email Settings",
    breadcrumbs: [
        {
            name: "Dashboard",
            path: routeLink.dashboard.to,
        },
        {
            name: "Settings",
            path: "",
        },
        {
            name: "System Email Settings",
            path: "/settings/system-email",
        },
    ],
};

export const emailProviderSettingsPageInfo = {
    title: "Email Provider Settings",
    breadcrumbs: [
        {
            name: "Dashboard",
            path: routeLink.dashboard.to,
        },
        {
            name: "Settings",
            path: "",
        },
        {
            name: "Email Provider Settings",
            path: "/settings/email-provider",
        },
    ],
};

export const SMSProviderSettingsPageInfo = {
    title: "SMS Provider Settings",
    breadcrumbs: [
        {
            name: "Dashboard",
            path: routeLink.dashboard.to,
        },
        {
            name: "Settings",
            path: "",
        },
        {
            name: "SMS Provider Settings",
            path: "/settings/sms-provider",
        },
    ],
};

export const priceSettingsPageInfo = {
    title: "Price Settings",
    breadcrumbs: [
        {
            name: "Dashboard",
            path: routeLink.dashboard.to,
        },
        {
            name: "Settings",
            path: "",
        },
        {
            name: "Price Settings",
            path: routeLink.priceSettings.to,
        },
    ],
};

export const agencyStaffPageInfo = {
    title: "Agency Staff",
    breadcrumbs: [
        {
            name: "Dashboard",
            path: routeLink.dashboard.to,
        },
        {
            name: "Settings",
            path: "",
        },
        {
            name: "Agency Staff",
            path: "/settings/agency-staff",
        },
    ],
};

export const clientPaymentsPageInfo = {
    title: "Client Payments",
    breadcrumbs: [
        {
            name: "Dashboard",
            path: routeLink.dashboard.to,
        },
        {
            name: "Settings",
            path: "",
        },
        {
            name: "Client Payments",
            path: "/settings/client-payments",
        },
    ],
};

export const agencyBillingPageInfo = {
    title: "Agency Billing Details",
    breadcrumbs: [
        {
            name: "Dashboard",
            path: routeLink.dashboard.to,
        },
        {
            name: "Settings",
            path: "",
        },
        {
            name: "Agency Billing Details",
            path: "/settings/agency-billing",
        },
    ],
};

export const RevenueModelPageInfo = {
    title: "Revenue Model",
    breadcrumbs: [
        {
            name: "Dashboard",
            path: routeLink.dashboard.to,
        },
        {
            name: "Settings",
            path: "",
        },
        {
            name: "Revenue Model",
            path: "/settings/revenue-model",
        },
    ],
};

export const packagePricingPageInfo = {
    title: "Package Pricing",
    breadcrumbs: [
        {
            name: "Dashboard",
            path: routeLink.dashboard.to,
        },
        {
            name: "Settings",
            path: "",
        },
        {
            name: "Package Pricing",
            path: "/settings/package-pricing",
        },
    ],
};

export const privacyPolicyPageInfo = {
    title: "Privacy Policy",
    breadcrumbs: [
        {
            name: "Dashboard",
            path: routeLink.dashboard.to,
        },
        {
            name: "Settings",
            path: "",
        },
        {
            name: "Privacy Policy",
            path: "/settings/privacy-policy",
        },
    ],
};

export const agencyBalancePageInfo = {
    title: "Balance",
    breadcrumbs: [
        {
            name: "Dashboard",
            path: routeLink.dashboard.to,
        },
        {
            name: "Settings",
            path: "",
        },
        {
            name: "Balance",
            path: "/settings/balance",
        },
    ],
};

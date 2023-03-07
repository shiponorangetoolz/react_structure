// ## global Loading time
export const RESPONSE_LOADING_TIME = 1000;
export const DEBOUNCE_DELAY_TIME = 1000;

// ## user onboard stage_no
export const ONBOARD_STAGE_NO_ONE = 1; // COUNTRY ORIGIN
export const ONBOARD_STAGE_NO_TWO = 2; // EMAIL PROVIDER
export const ONBOARD_STAGE_NO_THREE = 3; // SMS PROVIDER
export const ONBOARD_STAGE_NO_FOUR = 4; //  STRIPE PAYMENT SETTINGS
export const ONBOARD_STAGE_NO_FIVE = 5; // DOMAIN SETTINGS

// ## region [Agency Package table constant]
export const AGENCY_PACKAGE_IS_SHAREABLE__YES = 1;
export const AGENCY_PACKAGE_IS_SHAREABLE__NO = 0;

// ## region [User table constants]
export const USER__ACTIVE = 1;
export const USER__INACTIVE = 0;

// ## region [User Setting table constant]
export const USER__SETTING__RECURRING__STATUS_ON = 1;
export const USER__SETTING__RECURRING__STATUS_OFF = 0;

// ## region [Agency Setting table constant]
export const AGENCY_SETTING__LOCALIZATION_COUNTRY_ORIGIN = 1; // value will be a string like 'US', 'BD' etc
export const AGENCY_SETTING__CREDIT_FORWARD = 2; // value will be boolean (0/1)
export const AGENCY_SETTING__CURRENCY = 3; // value will be a string like 'USD' etc

// ## region [Agency Payment Method table constant]
export const PAYMENT_METHOD__STRIPE = 1;
export const PAYMENT_METHOD__PAYPAL = 2;
export const PAYMENT_METHOD__AUTHORIZE_DOT_NET = 3;
export const PAYMENT_METHOD__2_CHECKOUT = 4;

export const AGENCY_PAYMENT_TYPE__CARD_DEFAULT__YES = 1;
export const AGENCY_PAYMENT_TYPE__CARD_DEFAULT__NO = 0;
export const AGENCY_PAYMENT_STATUS__CARD_ACTIVE = 1;
export const AGENCY_PAYMENT_STATUS__CARD_INACTIVE = 0;

// ## region [SystemEmail table constants]
export const SYSTEM_EMAIL__USER__TYPE__ADMIN = 1;
export const SYSTEM_EMAIL__USER__TYPE__AGENCY = 2;
export const SYSTEM_EMAIL__EMAIL__TYPE__ACCOUNT_CREATE = 1;
export const SYSTEM_EMAIL__EMAIL__TYPE__ACCOUNT_DEACTIVATE = 2;
export const SYSTEM_EMAIL__EMAIL__TYPE__ACCOUNT_FORGOT_PASSWORD = 3;
export const SYSTEM_EMAIL__EMAIL__TYPE__PACKAGE_BUY = 4;
export const SYSTEM_EMAIL__EMAIL__TYPE__PACKAGE_CHANGE = 5;
export const SYSTEM_EMAIL__EMAIL__TYPE__TOP_UP_RECHARGE = 6;

// ## region [Agency Invoice table constant]
export const AGENCY_INVOICE__FOR_PACKAGE_BUY = 1;
export const AGENCY_INVOICE__FOR_PACKAGE_FREE = 2;
export const AGENCY_INVOICE__FOR_PACKAGE_RECURRING = 3;

// ## region [User Has Package table constants]
export const USER__HAS__PACKAGE__ACTIVE = 1;
export const USER__HAS__PACKAGE__INACTIVE = 0;
export const USER__HAS__PACKAGE__TYPE__PAID = 1;
export const USER__HAS__PACKAGE__TYPE__FREE = 2;
export const USER__HAS__PACKAGE__IS__TRIAL = 2;
export const USER__HAS__PACKAGE__IS__NOT__TRIAL = 1;

export const WHO_WILL_PAY__FREE = 1;
export const WHO_WILL_PAY__AGENCY = 2;
export const WHO_WILL_PAY__USER = 3;

//For Basic
export const AGENCY_PACKAGE_LIMIT_KEY__DOLLAR_BALANCE = 1;
export const AGENCY_PACKAGE_LIMIT_KEY__TEAM_MEMBER = 2;
export const AGENCY_PACKAGE_LIMIT_KEY__CLIENT = 3;
export const AGENCY_SETTING_KEY__CUT_OFF_START_TIME = 4;
export const AGENCY_SETTING_KEY__CUT_OFF_END_TIME = 5;

export const AGENCY__PACKAGE__CHARGE_FOR__PAYMENT = 2;

// Agency && Staff Role
export const AGENCY_ROLE_ADMIN = "admin";
export const AGENCY_ROLE_ADMIN_VIEW = "admin-view-only";
export const AGENCY_ROLE_EDITOR = "editor";

// Email Gateway Providers
export const GATEWAY__SENDGRID = 2;
export const GATEWAY__NYLAS = 6;
export const GATEWAY__YAHOO_MAIL_PLUS = 9;
export const GATEWAY__AOL = 10;
export const GATEWAY__ZOHO_MAIL = 11;
export const GATEWAY__ZOHO_MAIL_EU = 12;
export const GATEWAY__GMAIL = 17;
export const GATEWAY__OUTLOOK = 18;
export const GATEWAY__HOTMAIL = 19;
export const GATEWAY__OFFICE365 = 20;
export const GATEWAY__YAHOO_MAIL = 21;
export const GATEWAY__YAHOO_UK = 22;

// SMS Gateway Providers
export const GATEWAY__TWILIO = 1;
export const GATEWAY__SIGNALWIRE = 4;
export const GATEWAY__SMS__BANGLALINK = 13;
export const GATEWAY__SMS__EGYPT_SMS_SMART_EGYPT = 14;
export const GATEWAY__SMS__GLOBAL_SMS_NEXMO = 15;
export const GATEWAY__SMS_SINGAPORE_SPRYNG = 16;
export const GATEWAY__SMS_USA_PLIVO = 3;

// Provider Constant
export const GATEWAY__PROVIDER_SMS = 1;
export const GATEWAY__PROVIDER_EMAIL = 2;

// app integration app type
export const AGENCY_APP_NAME__GOOGLE = 1;
export const AGENCY_APP_NAME__FACEBOOK = 2;

export const AGENCY_INVOICE__FOR_RECHARGE_TOP_UP_AMOUNT = 6;

// #region Notification table constant

export const NOTIFICATION_AGENCY_EVENT__TYPE__USER_REGISTRATION = 1;
export const NOTIFICATION_AGENCY_EVENT__TYPE__USER_BUY_PACKAGE = 2;
export const NOTIFICATION_AGENCY_EVENT__TYPE__USER_BALANCE_RECHARGE = 3;
export const NOTIFICATION_AGENCY_EVENT__TYPE__USER_RECURRING_BILLING_FAILED = 4;
export const NOTIFICATION_AGENCY_EVENT__TYPE__AGENCY_PACKAGE_EXPIRE = 5;

export const NOTIFICATION_AGENCY_SEEN_FLAG__SEEN = 1;
export const NOTIFICATION_AGENCY_SEEN_FLAG__NOT_SEEN = 0;

// #region [Agency Activity Logs table constant]
export const AGENCY_ACTIVITY_LOG__ACTION_TYPE__CREATE = 1;
export const AGENCY_ACTIVITY_LOG__ACTION_TYPE__UPDATE = 2;
export const AGENCY_ACTIVITY_LOG__ACTION_TYPE__DELETE = 3;
export const AGENCY_ACTIVITY_LOG__ACTION_TYPE__COMPLETED = 4;
export const AGENCY_ACTIVITY_LOG__ACTION_TYPE__OTHERS = 5;

// ## region [Credit Setting  constant]
export const CREDIT_SETTING__CONTENT_TYPE__FOR_AGENCY_SMS_COST_RATE = 1;
export const CREDIT_SETTING__CONTENT_TYPE__FOR_AGENCY_EMAIL_COST_RATE = 2;
export const CREDIT_SETTING__CONTENT_TYPE__FOR_USER_SMS_COST_RATE = 3;
export const CREDIT_SETTING__CONTENT_TYPE__FOR_USER_EMAIL_COST_RATE = 4;

// ## Help [Help Suggestion constant]
export const HELP_TYPE_FOR__USER = "1";
export const HELP_TYPE_FOR__AGENCY = "2";
export const HELP_TYPE_FOR__BOTH = "3";

import {
    GATEWAY__AOL,
    GATEWAY__GMAIL,
    GATEWAY__HOTMAIL,
    GATEWAY__OFFICE365,
    GATEWAY__OUTLOOK,
    GATEWAY__SENDGRID,
    GATEWAY__SMS__BANGLALINK,
    GATEWAY__SMS__EGYPT_SMS_SMART_EGYPT,
    GATEWAY__SMS__GLOBAL_SMS_NEXMO,
    GATEWAY__SMS_SINGAPORE_SPRYNG,
    GATEWAY__TWILIO,
    GATEWAY__YAHOO_MAIL,
    GATEWAY__YAHOO_MAIL_PLUS,
    GATEWAY__YAHOO_UK,
    GATEWAY__ZOHO_MAIL,
    GATEWAY__ZOHO_MAIL_EU,
} from "../constants/coreConstant";

export const emailGatewayProviderField = (emailId) => {
    switch (emailId) {
        case GATEWAY__SENDGRID:
            return [
                {
                    name: "email",
                    emailId: GATEWAY__SENDGRID,
                    label: "From Email Address",
                    type: "email",
                    validator: {
                        isRequired: true,
                        required: "Email address is required.",
                        pattern: {
                            value: /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/,
                            message: "Invalid email address.",
                        },
                    },
                },
                {
                    name: "api_key",
                    emailId: GATEWAY__SENDGRID,
                    label: "Sendgrid Api Key",
                    type: "password",
                    validator: {
                        required: "Api key is required.",
                    },
                },
            ];
        case GATEWAY__GMAIL:
            return [
                {
                    name: "username",
                    emailId: GATEWAY__GMAIL,
                    label: "Username",
                    type: "text",
                    validator: {
                        required: "Username is required.",
                    },
                },
                {
                    name: "password",
                    emailId: GATEWAY__GMAIL,
                    label: "Password",
                    type: "password",
                    validator: {
                        required: "Password is required.",
                    },
                },
            ];
        case GATEWAY__OUTLOOK:
            return [
                {
                    name: "username",
                    emailId: GATEWAY__OUTLOOK,
                    label: "Username",
                    type: "text",
                    validator: {
                        required: "Username is required.",
                    },
                },
                {
                    name: "password",
                    emailId: GATEWAY__OUTLOOK,
                    label: "Password",
                    type: "password",
                    validator: {
                        required: "Password is required.",
                    },
                },
            ];
        case GATEWAY__HOTMAIL:
            return [
                {
                    name: "username",
                    emailId: GATEWAY__HOTMAIL,
                    label: "Username",
                    type: "text",
                    validator: {
                        required: "Username is required.",
                    },
                },
                {
                    name: "password",
                    emailId: GATEWAY__HOTMAIL,
                    label: "Password",
                    type: "password",
                    validator: {
                        required: "Password is required.",
                    },
                },
            ];
        case GATEWAY__OFFICE365:
            return [
                {
                    name: "username",
                    emailId: GATEWAY__OFFICE365,
                    label: "Username",
                    type: "text",
                    validator: {
                        required: "Username is required.",
                    },
                },
                {
                    name: "password",
                    emailId: GATEWAY__OFFICE365,
                    label: "Password",
                    type: "password",
                    validator: {
                        required: "Password is required.",
                    },
                },
            ];
        case GATEWAY__YAHOO_MAIL:
            return [
                {
                    name: "username",
                    emailId: GATEWAY__YAHOO_MAIL,
                    label: "Username",
                    type: "text",
                    validator: {
                        required: "Username is required.",
                    },
                },
                {
                    name: "password",
                    emailId: GATEWAY__YAHOO_MAIL,
                    label: "Password",
                    type: "password",
                    validator: {
                        required: "Password is required.",
                    },
                },
            ];
        case GATEWAY__YAHOO_UK:
            return [
                {
                    name: "username",
                    emailId: GATEWAY__YAHOO_UK,
                    label: "Username",
                    type: "text",
                    validator: {
                        required: "Username is required.",
                    },
                },
                {
                    name: "password",
                    emailId: GATEWAY__YAHOO_UK,
                    label: "Password",
                    type: "password",
                    validator: {
                        required: "Password is required.",
                    },
                },
            ];
        case GATEWAY__YAHOO_MAIL_PLUS:
            return [
                {
                    name: "username",
                    emailId: GATEWAY__YAHOO_MAIL_PLUS,
                    label: "Username",
                    type: "text",
                    validator: {
                        required: "Username is required.",
                    },
                },
                {
                    name: "password",
                    emailId: GATEWAY__YAHOO_MAIL_PLUS,
                    label: "Password",
                    type: "password",
                    validator: {
                        required: "Password is required.",
                    },
                },
            ];
        case GATEWAY__AOL:
            return [
                {
                    name: "username",
                    emailId: GATEWAY__AOL,
                    label: "Username",
                    type: "text",
                    validator: {
                        required: "Username is required.",
                    },
                },
                {
                    name: "password",
                    emailId: GATEWAY__AOL,
                    label: "Password",
                    type: "password",
                    validator: {
                        required: "Password is required.",
                    },
                },
            ];
        case GATEWAY__ZOHO_MAIL:
            return [
                {
                    name: "username",
                    emailId: GATEWAY__ZOHO_MAIL,
                    label: "Username",
                    type: "text",
                    validator: {
                        required: "Username is required.",
                    },
                },
                {
                    name: "password",
                    emailId: GATEWAY__ZOHO_MAIL,
                    label: "Password",
                    type: "password",
                    validator: {
                        required: "Password is required.",
                    },
                },
            ];
        case GATEWAY__ZOHO_MAIL_EU:
            return [
                {
                    name: "username",
                    emailId: GATEWAY__ZOHO_MAIL_EU,
                    label: "Username",
                    type: "text",
                    validator: {
                        required: "Username is required.",
                    },
                },
                {
                    name: "password",
                    emailId: GATEWAY__ZOHO_MAIL_EU,
                    label: "Password",
                    type: "password",
                    validator: {
                        required: "Password is required.",
                    },
                },
            ];
        default:
            return [];
    }
};

export const smsGatewayProviderField = (smsId) => {
    switch (smsId) {
        case GATEWAY__TWILIO:
            return [
                {
                    name: "account_sid",
                    smsId: GATEWAY__TWILIO,
                    label: "Account SID",
                    type: "text",
                    validator: {
                        required: "SID is required.",
                    },
                },
                {
                    name: "auth_token",
                    smsId: GATEWAY__TWILIO,
                    label: "Auth Token",
                    type: "password",
                    validator: {
                        required: "Token is required.",
                    },
                },
            ];
        case GATEWAY__SMS__BANGLALINK:
            return [
                {
                    name: "api_key",
                    smsId: GATEWAY__SMS__BANGLALINK,
                    label: "Api Key",
                    type: "password",
                    validator: {
                        required: "Api key is required.",
                    },
                },
            ];
        case GATEWAY__SMS__EGYPT_SMS_SMART_EGYPT:
            return [
                {
                    name: "username",
                    smsId: GATEWAY__SMS__EGYPT_SMS_SMART_EGYPT,
                    label: "Username",
                    type: "text",
                    validator: {
                        required: "Username is required.",
                    },
                },
                {
                    name: "password",
                    smsId: GATEWAY__SMS__EGYPT_SMS_SMART_EGYPT,
                    label: "Password",
                    type: "password",
                    validator: {
                        required: "Password is required.",
                    },
                },
                {
                    name: "sender",
                    smsId: GATEWAY__SMS__EGYPT_SMS_SMART_EGYPT,
                    label: "Sender",
                    type: "text",
                    validator: {
                        required: "Sender is required.",
                    },
                },
            ];
        case GATEWAY__SMS__GLOBAL_SMS_NEXMO:
            return [
                {
                    name: "api_key",
                    smsId: GATEWAY__SMS__GLOBAL_SMS_NEXMO,
                    label: "Api Key",
                    type: "text",
                    validator: {
                        required: "Api key is required.",
                    },
                },
                {
                    name: "api_secret",
                    smsId: GATEWAY__SMS__GLOBAL_SMS_NEXMO,
                    label: "Api Secret",
                    type: "password",
                    validator: {
                        required: "Api Secret is required.",
                    },
                },
            ];
        case GATEWAY__SMS_SINGAPORE_SPRYNG:
            return [
                {
                    name: "access_key",
                    smsId: GATEWAY__SMS_SINGAPORE_SPRYNG,
                    label: "Access Key",
                    type: "password",
                    validator: {
                        required: "Access Key is required.",
                    },
                },
            ];
        default:
            return [];
    }
};

export const registerPattern = {
    email: {
        required: "Email is required!",
        pattern: {
            value: /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/,
            message: "Email is invalid!",
        },
        maxLength: {
            value: 50,
            message: "Email must have less than 50 characters!",
        },
        setValueAs: (v) => (v ? v.trim() : ""),
    },
    emailNotRequired: {
        required: false,
        pattern: {
            value: /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/,
            message: "Email is invalid!",
        },
        maxLength: {
            value: 50,
            message: "Email must have less than 50 characters!",
        },
        setValueAs: (v) => (v ? v.trim() : ""),
    },
    password: {
        required: "Password is required",
        minLength: {
            value: 6,
            message: "Password must have at least 6 characters",
        },
        setValueAs: (v) => (v ? v.trim() : ""),
    },
    termsAndCondition: {
        required: "Need to accept our terms and condition",
    },
    first_name: {
        required: "Firstname is required",
        maxLength: {
            value: 50,
            message: "Firstname must have less than 50 characters!",
        },
        setValueAs: (v) => (v ? v.trim() : ""),
    },
    last_name: {
        required: "Lastname is required",
        maxLength: {
            value: 50,
            message: "Lastname must have less than 50 characters!",
        },
        setValueAs: (v) => (v ? v.trim() : ""),
    },
    phone: {
        required: "Phone number is required",
        pattern: {
            value: /^[0-9]+$/,
            message: "Invalid phone number!",
        },
        minLength: {
            value: 11,
            message: "Phone number must have minimum 11 digits!",
        },
        maxLength: {
            value: 16,
            message: "Phone number must have less than 16 digits!",
        },
        setValueAs: (v) => (v ? v.trim() : ""),
    },
    phoneNotRequired: {
        required: false,
        pattern: {
            value: /^[0-9]+$/,
            message: "Invalid phone number !",
        },
        minLength: {
            value: 11,
            message: "Phone number must have minimum 11 digit!",
        },
        maxLength: {
            value: 16,
            message: "Phone number must have less than 16 digit!",
        },
        setValueAs: (v) => (v ? v.trim() : ""),
    },

    company_name: {
        required: "Agency name is required",
        maxLength: {
            value: 100,
            message: " Agency name max length 100!",
        },
        setValueAs: (v) => (v ? v.trim() : ""),
    },
    description: {
        required: "Agency description is required",
        setValueAs: (v) => (v ? v.trim() : ""),
        maxLength: {
            value: 252,
            message: "Description must have less than 250 characters!",
        },
    },
    web_site_url: {
        required: false,
        pattern: {
            value: /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/,
            message: "Invalid website url!",
        },
        setValueAs: (v) => (v ? v.trim() : ""),
    },
    address: {
        required: "Address is required",
        setValueAs: (v) => (v ? v.trim() : ""),
    },
    city: {
        required: "City is required",
        maxLength: {
            value: 20,
            message: "City must have less than 20 characters!",
        },
        setValueAs: (v) => (v ? v.trim() : ""),
    },
    cityNotRequired: {
        required: false,
        maxLength: {
            value: 20,
            message: "City must have less than 20 characters!",
        },
        setValueAs: (v) => (v ? v.trim() : ""),
    },
    stateNotRequired: {
        required: false,
        maxLength: {
            value: 20,
            message: "State must have less than 20 characters!",
        },
        setValueAs: (v) => (v ? v.trim() : ""),
    },
    zip_code: {
        required: "Zip Code is required",
        setValueAs: (v) => (v ? v.trim() : ""),
    },
    app_name: {
        required: "App name is required!",
        maxLength: {
            value: 20,
            message: "App name must have less than 20 characters!",
        },
    },
    client_secret: {
        required: "Client Secret key is required.",
        pattern: {
            value: /^\S*$/,
            message: "White space is not allow",
        },
    },
    charge_amount: {
        required: "Stripe Payment Charge is required.",
        pattern: {
            value: /^\d*[.]?\d*$/,
            message: "Invalid charge amount value !",
        },
        max: {
            value: 50,
            message: "Payment Charge must be less than 50",
        },
    },

    topUp_amount: {
        required: "Amount is required.",
        pattern: {
            value: /^\d*[.]?\d*$/,
            message: "Invalid amount value !",
        },
        min: {
            value: 10,
            message: "Minimum amount value is 10",
        },
    },

    //    System Email input validation
    email_type: {
        required: "Email type is required",
    },
    subject: {
        required: "Subject is required",
        maxLength: {
            value: 100,
            message: "Subject must have less than 100 characters!",
        },
        setValueAs: (v) => (v ? v.trim() : ""),
    },

    title: {
        required: "title is required",
        minLength: {
            value: 6,
            message: "title must have at least 6 characters!",
        },
        setValueAs: (v) => (v ? v.trim() : ""),
    },
    category: {
        required: "Category is required",
    },
};

export const urlRegisterPattern = {
    sub_domain_name: {
        required: "Subdomain name is required",
        pattern: {
            value: /^[a-z0-9_.:-]*$/,
            message: "Invalid sub-domain name!",
        },
        setValueAs: (v) => (v ? v.trim() : ""),
    },
    custom_domain_name: {
        required: "Custom domain name is required",
        pattern: {
            value: /^[a-z0-9_.:-]*$/,
            message: "Invalid custom-domain name!",
        },
        setValueAs: (v) => (v ? v.trim() : ""),
    },
};

export const senderAddressPattern = {
    sender_address: {
        required: "Sender address is required",
        pattern: {
            value: /^[0-9]+$/,
            message: "Invalid sender address!",
        },
        minLength: {
            value: 10,
            message: "Sender address must have minimum 10 digits!",
        },
        maxLength: {
            value: 16,
            message: "Sender address must have less than 16 digits!",
        },
        setValueAs: (v) => (v ? v.trim() : ""),
    },
};

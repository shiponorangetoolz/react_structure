const subDomainToLink = (domainName) => {
    const isLocalHost = /localhost/.test(domainName);
    if (isLocalHost) {
        return "http://" + domainName;
    } else {
        return "https://" + domainName;
    }
};

export default subDomainToLink;

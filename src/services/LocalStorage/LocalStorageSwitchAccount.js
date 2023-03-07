class LocalStorageSwitchAccount {
    getRecentClient(email = "") {
        const clientData = localStorage.getItem(email);

        if (clientData) {
            const clientArr = JSON.parse(clientData);
            return clientArr.length ? clientArr : [];
        } else {
            return [];
        }
    }

    setRecentClient(email = "", clientObj) {
        const clientArr = this.getRecentClient(email);
        const filterArr = clientArr.filter((client) => client.uid !== clientObj.uid);

        if (filterArr.length >= 3) {
            filterArr.pop();
            filterArr.unshift(clientObj);
            localStorage.setItem(email, JSON.stringify(filterArr));
        } else {
            filterArr.unshift(clientObj);
            localStorage.setItem(email, JSON.stringify(filterArr));
        }
    }
}

export default new LocalStorageSwitchAccount();

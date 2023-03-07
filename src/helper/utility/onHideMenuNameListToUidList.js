export const onHideMenuNameListToUidList = (mainModuleList = [], nameList = []) => {
    const UidList = [];

    for (let i = 0; mainModuleList.length > i; i++) {
        const mainModuleElement = mainModuleList[i];

        for (let j = 0; nameList.length > j; j++) {
            if (mainModuleElement.name === nameList[j]) {
                UidList.push(mainModuleElement.uid);
            }
        }
    }
    return UidList;
};

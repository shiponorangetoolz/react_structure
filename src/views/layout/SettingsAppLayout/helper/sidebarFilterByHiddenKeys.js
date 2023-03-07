const sidebarFilterByHiddenKeys = (settingsSidebarList, hiddenKeys) => {
    // console.log({ settingsSidebarList, hiddenKeys });

    if (hiddenKeys && hiddenKeys.length > 0) {
        const result = settingsSidebarList.map((sidebarItem) => {
            if (sidebarItem.subMenu) {
                const filterSubMenu = sidebarItem.subMenu.filter((subMenuItem) => {
                    return !hiddenKeys.includes(subMenuItem.key);
                });
                return { ...sidebarItem, subMenu: filterSubMenu };
            } else {
                return sidebarItem;
            }
        });

        return result;
    } else {
        return settingsSidebarList;
    }
};

export default sidebarFilterByHiddenKeys;

const routesFilterByHiddenKey = (mainRoutes = {}, hiddenKeys = []) => {
    const mainRoutesChildrenArr = [...mainRoutes.children];

    if (hiddenKeys && hiddenKeys.length > 0) {
        const result = mainRoutesChildrenArr.filter((childrenItem) => !hiddenKeys.includes(childrenItem.key));
        return { ...mainRoutes, children: result };
    } else {
        return mainRoutes;
    }
};

export default routesFilterByHiddenKey;

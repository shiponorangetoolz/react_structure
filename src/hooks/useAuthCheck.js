import { useEffect, useState } from "react";
import hasAuthenticatedUser from "../helper/utility/hasAuthenticateUser";
import { useDispatch } from "react-redux";
import { getAccountSettingData } from "../views/settings/reducers/accountSettingSlice";

const useAuthCheck = () => {
    const dispatch = useDispatch();
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        const hasAccessToken = hasAuthenticatedUser();
        if (hasAccessToken) {
            dispatch(getAccountSettingData());
            return setChecked(true);
        } else {
            setChecked(true);
        }
    }, []);

    return checked;
};

export default useAuthCheck;

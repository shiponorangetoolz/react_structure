import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Alert } from "@mui/lab";
import { formatCountDownTime } from "../../../helper/utility/formatCountDownTime";
import { clearAttemptTooMany } from "../reducers/userSlice";

const TooManyLoginAttemptAlert = ({ preMessage, countDownTime }) => {
    const dispatch = useDispatch();

    const timerIdRef = useRef(null);
    const [countDown, setCountDown] = useState(0);

    useEffect(() => {
        if (countDownTime > 0) {
            setCountDown(countDownTime);
        }
    }, [countDownTime]);

    useEffect(() => {
        timerIdRef.current = setInterval(() => {
            if (countDown > 1) {
                setCountDown((prevState) => prevState - 1);
            } else {
                setCountDown(0);
                clearTimerId();
                dispatch(clearAttemptTooMany());
            }
        }, 1000);
        return () => clearTimerId();
    });

    const clearTimerId = () => {
        clearInterval(timerIdRef.current);
    };

    return <Alert severity='error'>{preMessage + formatCountDownTime(countDown) + " sec."}</Alert>;
};

export default TooManyLoginAttemptAlert;

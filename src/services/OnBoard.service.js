import { requests } from "./http.service";

class OnBoardService {
    getStatePositionAndJourneyMode(params) {
        return requests.get(
            process.env.REACT_APP_API_URL_MAIN_AGENCY_SERVER +
                "api/v1/agency/on/boarding/get/stage/position/journey/mode",
            params
        );
    }

    updateStatePositionAndJourneyMode(params) {
        return requests.put(
            process.env.REACT_APP_API_URL_MAIN_AGENCY_SERVER +
                "api/v1/agency/on/boarding/update/stage/position/journey/mode",
            params
        );
    }
}

export default new OnBoardService();

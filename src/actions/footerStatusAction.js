import { footerStateConstant } from "../assets/constants/store-constants";

export const footerStatusAction = {
    footerStatus
}

function footerStatus(status) {
    const footerStatus = Object.assign({}, status);
    
    return footerStatus;
}
import { footerConstants } from '../assets/constants/index';

export const footerActions = {
    getFooterParam,
};

function getFooterParam(param) {
    return { type: footerConstants.FOOTER_REQUEST, param };
}

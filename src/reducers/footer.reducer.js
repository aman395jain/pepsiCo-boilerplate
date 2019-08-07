import { footerConstants } from '../assets/constants/index';

export function footer(state = {}, action) {
    console.log(action.val)
    switch (action.type) {
        case footerConstants.FOOTER_REQUEST:
            return { param_value: action.val };
        default:
            return state
    }
}
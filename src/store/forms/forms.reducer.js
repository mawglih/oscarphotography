import {
  SUBMIT_FORM_TO_SERVER_SUCCESS,
  SUBMIT_FORM_TO_SERVER_START,
  CLEAR_FORM,
} from './forms.actions';

const INITIAL_STATE = {
  data: null,
  loading: false,
  modal: false,
};

export default (state = INITIAL_STATE, { type, payload} ) => {
  switch(type) {
    case SUBMIT_FORM_TO_SERVER_SUCCESS:
      return {
        ...state,
        data: payload,
        loading: false,
        modal: true,
      };
    case SUBMIT_FORM_TO_SERVER_START:
      return {
        ...state,
        loading: true,
      };
    case CLEAR_FORM:
      return {
        ...state,
        data: null,
        loading: false,
        modal: true,
      }
    default:
      return state;
    };
};

export const SUBMIT_FORM_TO_SERVER_START = 'SUBMIT_FORM_TO_SERVER_START';
export const SUBMIT_FORM_TO_SERVER_SUCCESS = 'SUBMIT_FORM_TO_SERVER_SUCCESS';
export const SUBMIT_FORM_TO_SERVER_FAILURE = 'SUBMIT_FORM_TO_SERVER_FAILURE';
export const CLEAR_FORM = 'CLEAR_FORM';

export const submitFormStart = payload => {
  return{
    type: SUBMIT_FORM_TO_SERVER_START,
    payload,
  };
};

export const submitFormSuccess = payload => {
  return{
    type: SUBMIT_FORM_TO_SERVER_SUCCESS,
    payload,
  };
};

export const submitFormFailure = ({ payload }) => {
  return{
    type: SUBMIT_FORM_TO_SERVER_FAILURE,
    error: payload,
  };
};

export const clearForm = () => ({ type: CLEAR_FORM, })

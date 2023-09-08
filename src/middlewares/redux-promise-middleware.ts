export default (store) => {
  const { dispatch } = store;

  const getReducerValidKeys = (action) => {
    const copyAction = { ...action };

    const listNotValidKeys = [
      'successFeedbackMsg',
      'onSuccess',
      'onError',
      'getErrorFeedbackMsg',
      'hideError',
    ];

    listNotValidKeys.forEach((el) => delete copyAction[el]);

    return copyAction;
  };

  const showLoading = (action, isPromise) => {
    const suffixes = ['_PENDING', '_FULFILLED', '_REJECTED'];

    const shouldShowLoading = suffixes.reduce((bool, el) => {
      if (action.type && action.type.endsWith(el)) {
        bool = false;
      }

      return bool;
    }, true);

    if (shouldShowLoading && isPromise) {
      dispatch({
        type: `${action.type}_PENDING`,
        values: action.values,
      });
    }
  };

  const handleSuccess = (resp, action) => {
    const reducerValidKeys = getReducerValidKeys(action);

    const {
      onSuccess,
      titleSuccessFeedBack = 'Sucesso!',
      successFeedbackMsg,
    } = action;

    dispatch({
      ...reducerValidKeys,
      type: `${action.type}_FULFILLED`,
      payload: resp.data,
      values: action.values,
    });

    if (typeof onSuccess === 'function') {
      onSuccess(resp);
    }
  };

  const handleError = (error, action) => {
    const { onError, getErrorFeedbackMsg, errorFeedbackMsg, hideError } =
      action;
    console.log(error);
    const defaultMessage =
      'Algo de errado aconteceu. Tente novamente mais tarde.';

    if (typeof onError === 'function') {
      onError(error);
    }

    let msg =
      typeof getErrorFeedbackMsg === 'function'
        ? getErrorFeedbackMsg(error)
        : errorFeedbackMsg || defaultMessage;

    dispatch({
      type: `${action.type}_REJECTED`,
      payload: msg,
      values: action.values,
    });
    const notAuthenticated = error.response && error.response.status === 401;

    if (notAuthenticated) {
      msg = 'Login expirado. Favor logar novamente!';
    }
  };

  return (next) => (action) => {
    const promise = action.payload;
    const isPromise = promise && promise.then;

    if (isPromise) {
      promise
        .then((resp) => handleSuccess(resp, action))
        .catch((error) => handleError(error, action));
    }

    showLoading(action, isPromise);

    next(action);
  };
};

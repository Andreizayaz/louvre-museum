export type ValidateErrorsTypes = {
  dateVisit: {
    isError: boolean;
  };
  timeVisit: {
    isError: boolean;
  };
  name: {
    isError: boolean;
  };
  mail: {
    isError: boolean;
  };
  phone: {
    isError: boolean;
  };
  ticketType: {
    isError: boolean;
  };
};

export type ValidateErrorActionType = {
  payload: ValidateErrorsTypes;
};

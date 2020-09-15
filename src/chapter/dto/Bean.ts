export interface Result {
  greenFlyFlightFlag: string;
  rewardMileage: string;
  reason: string;
}

export interface Resp {
  returnCode: string;
  errorMsg: string;
  result: Result;
}

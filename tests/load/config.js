export const BASE_URL = 'http://fastapi-app:8000';

// Gneral propouse configurations
export const REQUEST_DURATION_TRESHOLD = ['p(95)<25', 'p(99)<50']
export const REQUEST_FAILED_TRESHOLD = ['rate<0.005']
export const SCENARIO_TIME_UNIT = '1s' // Period of time to apply the rate value.
export const SCENARIO_RATE = 100 // Number of iterations to start during each timeunit (SCENARIO_TIME_UNIT)
// https://k6.io/docs/using-k6/scenarios/concepts/arrival-rate-vu-allocation/
export const SCENARIO_PRE_ALLOCATED_VUS = 100 // Number of VUs to pre-allocate before test start to preserve runtime resources.
export const SCENARIO_DURATION = '60s' // Total scenario duration
// https://k6.io/docs/using-k6/scenarios/executors/constant-arrival-rate/
// starts a fixed number of iterations over a specified period of time. It is an open-model executor, meaning iterations start independently of system response
export const SCENARIO_EXECUTOR = 'constant-arrival-rate'

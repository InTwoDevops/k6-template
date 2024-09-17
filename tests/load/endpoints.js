import http from 'k6/http';
import { check } from 'k6';
import * as CONFIG from './config.js';

export const endpointsScenarios = {
  // get_sync_sync: {
  //   executor: CONFIG.SCENARIO_EXECUTOR,
  //   exec: 'getSyncSync',
  //   duration: CONFIG.SCENARIO_DURATION, // total duration
  //   preAllocatedVUs: CONFIG.SCENARIO_PRE_ALLOCATED_VUS,
  //   rate: CONFIG.SCENARIO_RATE,
  //   timeUnit: CONFIG.SCENARIO_TIME_UNIT,
  //   tags: { path: 'get_sync_sync' },
  // },
  // get_async_sync: {
  //   executor: CONFIG.SCENARIO_EXECUTOR,
  //   exec: 'getAsyncSync',
  //   duration: CONFIG.SCENARIO_DURATION, // total duration
  //   preAllocatedVUs: CONFIG.SCENARIO_PRE_ALLOCATED_VUS,
  //   rate: CONFIG.SCENARIO_RATE,
  //   timeUnit: CONFIG.SCENARIO_TIME_UNIT,
  //   tags: { path: 'get_async_sync' },
  // },
  get_async_async: {
    executor: CONFIG.SCENARIO_EXECUTOR,
    exec: 'getAsyncAsync',
    duration: CONFIG.SCENARIO_DURATION, // total duration
    preAllocatedVUs: CONFIG.SCENARIO_PRE_ALLOCATED_VUS,
    // vus: CONFIG.SCENARIO_PRE_ALLOCATED_VUS,
    rate: CONFIG.SCENARIO_RATE,
    timeUnit: CONFIG.SCENARIO_TIME_UNIT,
    tags: { path: 'get_async_async' },
  },
};

export const healthTresholds = {
  // 'http_req_duration{path:get_sync_sync}': CONFIG.REQUEST_DURATION_TRESHOLD,
  // 'http_req_failed{path:get_sync_sync}': CONFIG.REQUEST_FAILED_TRESHOLD,
  //
  // 'http_req_duration{path:get_async_sync}': CONFIG.REQUEST_DURATION_TRESHOLD,
  // 'http_req_failed{path:get_async_sync}': CONFIG.REQUEST_FAILED_TRESHOLD,
  //
  'http_req_duration{path:get_async_async}': CONFIG.REQUEST_DURATION_TRESHOLD,
  'http_req_failed{path:get_async_async}': CONFIG.REQUEST_FAILED_TRESHOLD,
};

export function getSyncSync(token) {
  // console.log(token)
  const res = http.get(`${CONFIG.BASE_URL}/sync-sync`);

  check(res, {
    'Get status is 200': (r) => res.status === 200,
  });
}

export function getAsyncSync(token) {
  // console.log(token)
  const res = http.get(`${CONFIG.BASE_URL}/async-sync`);

  check(res, {
    'Get status is 200': (r) => res.status === 200,
  });
}

export function getAsyncAsync(token) {
  // console.log(token)
  const res = http.get(`${CONFIG.BASE_URL}/async-async`);

  check(res, {
    'Get status is 200': (r) => res.status === 200,
  });
}

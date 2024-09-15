import http from 'k6/http';
import * as CONFIG from './config.js';
import * as endpoints from './endpoints.js';

var token;

export var options = {
  scenarios: {
  },
  thresholds: {
    http_req_failed: CONFIG.REQUEST_FAILED_TRESHOLD,
    http_req_duration: CONFIG.REQUEST_DURATION_TRESHOLD,
  },
  summaryTrendStats: ['avg', 'min', 'med', 'max', 'p(95)', 'p(99)', 'p(99.99)', 'count'],
};
// Add options of each scenarios
// Endpoints
options = addOptions(options, endpoints.endpointsScenarios, endpoints.endpointsTresholds);


export function setup() {
  console.log("Setup")
  //for the future
  // https://community.grafana.com/t/how-do-i-parameterize-my-k6-test/96440/2
  if (!token) {
    console.log("No token")
    token = "emptyToken"
    // const req = {
    //   email: 'example@gmail.com',
    //   password: 'Password',
    // };
    // const res = http.post(`${CONFIG.BASE_URL}/v1/login/`, JSON.stringify(req), {
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // });
    // token = res.json().data.id_token
    return token;
  }
}

function addOptions(options, scenarios, tresholds) {
  for (const key in scenarios) {
    options.scenarios[key] = scenarios[key];
  }
  for (const key in tresholds) {
    options.thresholds[key] = tresholds[key];
  }
  return options;
}
//Endpoints
// export { getSyncSync as getSyncSync } from './endpoints.js';
// export { getSyncAsync as getSyncAsync } from './endpoints.js';
// export { getAsyncSync as getAsyncSync } from './endpoints.js';
export { getAsyncAsync as getAsyncAsync } from './endpoints.js';

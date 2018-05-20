const ENV = {
  DEV: 'development',
  PROD: 'production',
};
const DEV_ENV_URL = 'localhost:3000';

let currentEnv;
(function setCurrentEnv() {
  if (!currentEnv) {
    const loc = window.location.href;
    if (loc.match(DEV_ENV_URL)) {
      currentEnv = ENV.DEV;
    } else {
      currentEnv = ENV.PROD;
    }
  }
})();

export const isDev = () => currentEnv === ENV.DEV;
export const isProd = () => currentEnv === ENV.PROD;

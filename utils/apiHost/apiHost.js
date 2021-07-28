let backendHost;
let headerColor;
const hostname = window && window.location && window.location.hostname;
if (hostname === "localhost") {
  backendHost = "http://127.0.0.1:5000";
  headerColor = "#1eac00";
} else if (hostname === "app.bb-playground.com") {
  backendHost = "https://api.bb-playground.com";
  headerColor = "#1890ff";
} else backendHost = "http://127.0.0.1:5000";
export const API_ROOT = `${backendHost}`;
export const HOSTNAME = `${hostname}`;
export const HEADER_COLOR = `${headerColor}`;

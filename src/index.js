import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Modal from "react-modal";

import { getCLS, getFID, getLCP} from 'web-vitals';



Modal.setAppElement("#root");

ReactDOM.render(
  <App />,
  document.getElementById("root")
);

function gtag(){window.dataLayer.push(arguments)};

const sendToGoogleAnalytics = ({name, delta, value, id}) => {
   window.dataLayer = window.dataLayer || [];

   gtag('event', name, {
    // Built-in params:
    value: delta, // Use `delta` so the value can be summed.
    // Custom params:
    metric_id: id, // Needed to aggregate events.
    metric_value: value, // Optional.
    metric_delta: delta, // Optional.

    // OPTIONAL: any additional params or debug info here.
    // See: https://web.dev/debug-web-vitals-in-the-field/
    // metric_rating: 'good' | 'ni' | 'poor',
    // debug_info: '...',
    // ...
  });
}

getCLS(sendToGoogleAnalytics);
getFID(sendToGoogleAnalytics);
getLCP(sendToGoogleAnalytics);
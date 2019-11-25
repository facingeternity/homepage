import React, { useEffect } from "react";
import ReactGA, { FieldsObject } from "react-ga";
import { RouteComponentProps } from "react-router-dom";

const trackingId = "UA-112464932-1";
ReactGA.initialize(trackingId);

export const withTracker = <P extends RouteComponentProps>(
  WrappedComponent: React.ComponentType<P>,
  options: FieldsObject = {},
) => {
  const trackPage = (page: string) => {
    ReactGA.set({ page, ...options });
    ReactGA.pageview(page);
  };

  return (props: P) => {
    useEffect(() => {
      trackPage(props.location.pathname);
    }, [props.location.pathname]);

    return <WrappedComponent {...props} />;
  };
}

export default withTracker;
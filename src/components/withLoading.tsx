import React from "react";
import { Spinner } from "react-bootstrap";

interface WithLoadingInterface {
  isLoading: boolean;
}

export function withLoading<T>(
  WrappedComponent: React.ComponentType<T & WithLoadingInterface>
) {
  return function WithLoadingComponent(props: T & WithLoadingInterface) {
    if (!props.isLoading) return <WrappedComponent {...props} />;
    return (
      <div className="mt-4 py-5 d-flex justify-content-center">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  };
}

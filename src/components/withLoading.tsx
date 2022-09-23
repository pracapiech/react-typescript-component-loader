import { Spinner } from "react-bootstrap";

export function withLoading(WrappedComponent: any) {
  return function WithLoadingComponent(props: any) {
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

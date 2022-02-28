import { ErrorBoundaryComponent } from "@remix-run/react/routeModules";
import Typography, { Type } from "~/components/Typography";

const ErrorBoundaryTemplate: ErrorBoundaryComponent = ({ error }: { error: Error }) => {
    return (
        <>
        <Typography displayType={Type.H1} htmlType={Type.H1}>Something went wrong</Typography>
        <Typography>Try going back or going to the homepage. The error has been logged and someone will be looking into it.</Typography>
        <Typography>{error.name}: {error.message}</Typography>

        {process.env.NODE_ENV === "development" ? (
          <div>
            <pre>{error.stack}</pre>
          </div>
        ) : null}
      </>
    );
  };

  export { ErrorBoundaryTemplate };
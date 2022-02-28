import { useCatch } from "@remix-run/react";
import React from "react";
import Typography, { Type } from "~/components/Typography";
import { NotFoundBoundary } from "./NotFoundBoundary";

const CatchBoundaryTemplate: React.FC = () => {
    const caught = useCatch();

    if (caught.status === 404) {
        return <NotFoundBoundary />
    }

  return (
    <div>
      <Typography htmlType={Type.H1} displayType={Type.H1}>
        Opps, something went wrong.
      </Typography>

      <Typography>
        Try going back or going back to the home page. We've logged that something has gone wrong and will look into it.
      </Typography>

      <Typography>
        {caught.status} {caught.statusText}
      </Typography>
    </div>
  );
};

export { CatchBoundaryTemplate };

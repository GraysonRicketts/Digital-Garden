import React from "react";
import Typography, { Type } from "~/components/Typography";

const NotFoundBoundary: React.FC = () => {
  return (
    <div>
      <Typography htmlType={Type.H1} displayType={Type.H1}>
        Opps, we couldn't find your page.
      </Typography>

      <Typography>
        Try going back or going back to the home page. We've logged that you
        weren't able to find what you were looking for and will do our best to
        fix it.
      </Typography>
    </div>
  );
};

export { NotFoundBoundary };

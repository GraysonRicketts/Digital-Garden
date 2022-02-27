import React from "react";
import { useLoaderData } from "remix";
import { Env, Schema } from "~/app-config/config.interface";
import config from "~/app-config/config.service";

export enum Type {
  H1 = "H1",
  H2 = "H2",
  H3 = "H3",
  H4 = "H4",
  H5 = "H5",
  H6 = "H6",
  P = "P",
}

export async function loader<Schema>() {
  return config;
}

interface Props {
  displayType?: Type;
  htmlType?: Type;
}
const Typography: React.FC<Props> = ({ displayType = Type.P, htmlType = Type.P, children }) => {

  let cnType = "text-base";
  console.info('system', config);
  switch (displayType) {
    case Type.H1:
      cnType = "text-5xl";
      break;
    case Type.H2:
      cnType = "text-4xl";
      break;
    case Type.H3:
      cnType = "text-3xl";
      break;
    case Type.H4:
      cnType = "text-2xl";
      break;
    case Type.H5:
      cnType = "text-xl";
      break;
    case Type.H6:
      cnType = "text-lg";
      break;
    case Type.P:
      break;
    default:
      const data = useLoaderData<Schema>();
      if (data.system.env === Env.DEV) {
        throw new Error(`Un-handled display type: ${displayType}`);
      }
  }

  switch (htmlType) {
    case Type.H1:
      return <h1 className={cnType}>{children}</h1>;
    case Type.H2:
      return <h2 className={cnType}>{children}</h2>;
    case Type.H3:
      return <h3 className={cnType}>{children}</h3>;
    case Type.H4:
      return <h4 className={cnType}>{children}</h4>;
    case Type.H5:
      return <h5 className={cnType}>{children}</h5>;
    case Type.H6:
      return <h6 className={cnType}>{children}</h6>;
    case Type.P:
      return <p className={cnType}>{children}</p>;
  }
  return <p className={cnType}>{children}</p>;
};

export default Typography;

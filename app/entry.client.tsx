import { hydrate } from "react-dom";
import { RemixBrowser } from "remix/client";
import { initalize } from "./utility/dark-mode.client";

initalize();
hydrate(<RemixBrowser />, document);

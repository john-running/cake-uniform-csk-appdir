import {
  PageParameters,
  UniformComposition,
  retrieveRoute,
} from "@uniformdev/canvas-next-rsc";

import { resolveComponent } from "@/canvas/resolver";
export { generateStaticParams } from "@uniformdev/canvas-next-rsc";

export default async function Home(props: PageParameters) {
  const route = await retrieveRoute(props);
  return (
    <UniformComposition
      {...props}
      route={route}
      resolveComponent={resolveComponent}
      mode="static"
    />
  );
}

//@ts-expect-error error with the module
declare module "./monument-scene" {
  import type { FC } from "react";
  
  const MonumentScene: FC;
  export default MonumentScene;
}

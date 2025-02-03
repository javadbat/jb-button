import type { ReactComponentBuildConfig, WebComponentBuildConfig } from "../../tasks/build/builder/src/types.ts";

export const webComponentList: WebComponentBuildConfig[] = [
  {
    name: "jb-button",
    path: "./lib/jb-button.ts",
    outputPath: "./dist/jb-button.js",
    external: [],
    umdName: "JBButton",
  },
];
export const reactComponentList: ReactComponentBuildConfig[] = [
  {
    name: "jb-button-react",
    path: "./react/lib/JBButton.tsx",
    outputPath: "./react/dist/JBButton.js",
    external: ["jb-button", "prop-types", "react"],
    globals: {
      react: "React",
      "prop-types": "PropTypes",
    },
    umdName:"JBButtonReact",
    dir:"./react"
  },
];
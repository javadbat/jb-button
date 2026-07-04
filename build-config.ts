import type { ReactComponentBuildConfig, WebComponentBuildConfig } from "../../tasks/build/builder/src/types.ts";

export const webComponentList: WebComponentBuildConfig[] = [
  {
    name: "jb-button",
    path: "./web-component/lib/jb-button.ts",
    outputPath: "./web-component/dist/jb-button.js",
    tsConfigPath: "./web-component/tsconfig.json",
    external: ["jb-core","jb-loading"],
    globals:{
      "jb-core":"JBCore",
      "jb-loading":"JBLoading"
    },
    umdName: "JBButton",
  },
];
export const reactComponentList: ReactComponentBuildConfig[] = [
  {
    name: "jb-button-react",
    path: "./react/lib/JBButton.tsx",
    outputPath: "./react/dist/JBButton.js",
    external: ["jb-button", "react","jb-core","jb-core/react"],
    globals: {
      react: "React",
      "jb-button": "JBButton",
      "jb-core":"JBCore",
      "jb-core/react":"JBCoreReact"
    },
    umdName:"JBButtonReact",
    dir:"./react"
  },
];

import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { appName, gitConfig } from "./shared";

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      transparentMode: "top",
      title: appName,
    },
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
    links: [
      {
        type: "menu",
        text: "Visit",
        items: [
          {
            text: "Docs",
            description: "Read the documentation",
            url: "/docs",
          },
          {
            text: "App",
            description: "Visit the app",
            url: gitConfig.appUrl,
          },
        ],
      },
    ],
  };
}

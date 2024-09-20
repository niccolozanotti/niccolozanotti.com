import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "📓AI&Climate Notes",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "ai4climate.science",
    ignorePatterns: ["private", "Templates", ".obsidian",
      "Daily notes", "Weekly notes", "Tasks",
      "Tutorial-notes","Scripts","tmp", "assets",
      ".gitignore"
    ],
    defaultDateType: "created",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Inter",
        body: "Inter",
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "#fff8e8",
          lightgray: "#f1e6c8",
          gray: "#d6c4a5",
          darkgray: "#8b7b6b",
          dark: "#5f5243",
          secondary: "#c7a252",
          tertiary: "#a8773d",
          highlight: "rgba(199, 162, 82, 0.15)",
          textHighlight: "rgba(179,170,2,0.89)",
        },
        darkMode: {
          light: "#2c2b26",
          lightgray: "#5b574c",
          gray: "#857f71",
          darkgray: "#e5d9c2",
          dark: "#f2ebd4",
          secondary: "#b8975b",
          tertiary: "#c3a16f",
          highlight: "rgba(199, 162, 82, 0.15)",
          textHighlight: "#b3aa0288",
        },
      },
    },
  },
  plugins: {

    // TRANSFORMERS
    transformers: [
      Plugin.FrontMatter(),
      Plugin.TableOfContents(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting(
          {
            theme: {
              light: "solarized-dark",
              dark: "dracula-soft",
            },
            keepBackground: true,
          }
      ),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    // FILTERS
    filters: [Plugin.RemoveDrafts()],
    // EMITTERS
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config

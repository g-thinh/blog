import { PrismTheme } from "prism-react-renderer";
import { theme } from "./stitches.config";

export default function GetCodeBlockStyles() {
  return {
    plain: {
      backgroundColor: theme.colors.muted.toString(),
      color: theme.colors.text.toString(),
    },
    styles: [
      {
        types: ["comment", "prolog", "doctype", "cdata", "punctuation"],
        style: {
          color: theme.colors.grayness,
        },
      },
      {
        types: ["namespace"],
        style: {
          opacity: 0.7,
        },
      },
      {
        types: ["tag", "operator", "number"],
        style: {
          color: theme.colors.primary,
        },
      },
      {
        types: ["property", "function"],
        style: {
          color: theme.colors.secondary,
        },
      },
      {
        types: ["tag-id", "selector", "atrule-id"],
        style: {
          color: theme.colors.accent,
        },
      },
      {
        types: ["attr-name"],
        style: {
          color: "red",
        },
      },
      {
        types: [
          "boolean",
          "string",
          "entity",
          "url",
          "attr-value",
          "keyword",
          "control",
          "directive",
          "unit",
          "statement",
          "regex",
          "at-rule",
          "placeholder",
          "variable",
        ],
        style: {
          color: theme.colors.primary,
        },
      },
      {
        types: ["deleted"],
        style: {
          textDecorationLine: "line-through",
        },
      },
      {
        types: ["inserted"],
        style: {
          textDecorationLine: "underline",
        },
      },
      {
        types: ["italic"],
        style: {
          fontStyle: "italic",
        },
      },
      {
        types: ["important", "bold"],
        style: {
          fontWeight: "bold",
        },
      },
      {
        types: ["important"],
        style: {
          color: theme.colors.highlight,
        },
      },
    ],
  } as PrismTheme;
}

import { PrismTheme } from "prism-react-renderer";
import { useTheme } from "./theme";

export default function GetCodeBlockStyles() {
  const {
    theme: { colors },
  } = useTheme();
  return {
    plain: {
      backgroundColor: colors.muted,
      color: colors.text,
    },
    styles: [
      {
        types: ["comment", "prolog", "doctype", "cdata", "punctuation"],
        style: {
          color: colors.grayness,
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
          color: colors.primary,
        },
      },
      {
        types: ["property", "function"],
        style: {
          color: colors.secondary,
        },
      },
      {
        types: ["tag-id", "selector", "atrule-id"],
        style: {
          color: colors.accent,
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
          color: colors.primary,
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
          color: colors.highlight,
        },
      },
    ],
  } as PrismTheme;
}

import theme from "mdx-deck/themes";
import prismReason from "react-syntax-highlighter/languages/prism/reason";
import prismGraphQL from "react-syntax-highlighter/languages/prism/graphql";

export default {
  ...theme,
  font:
    "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol",
  colors: {
    ...theme.colors,
    text: "#fff",
    background: "#DD4B39",
    code: "#fff",
    pre: "#fff",
    preBackground: "#DD4B39"
  },
  prism: {
    languages: {
      reason: prismReason,
      graphql: prismGraphQL
    }
  },
  li: {
    padding: "5px",
    fontSize: "40px"
  },
  h2: {
    textAlign: "left",
    fontSize: "80px"
  },
  h3: {
    paddingLeft: "20px",
    borderLeft: "5px solid white",
    textAlign: "left"
  },
  blockquote: {
    fontStyle: "italic",
    paddingLeft: "40px",
    borderLeft: "10px solid white"
  },
  pre: {
    margin: "50px"
  }
};

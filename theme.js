import theme from "mdx-deck/themes";
import okaidia from "react-syntax-highlighter/styles/prism/prism";

export default {
  ...theme,
  prism: {
    style: okaidia
  }

  // colors: {
  //   ...baseTheme.colors,
  //   text: '#d6deeb',
  //   background: '#011627',
  //   link: '#addb67',
  // },
};

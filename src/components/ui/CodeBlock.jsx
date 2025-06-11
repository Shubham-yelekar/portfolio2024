import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeBlock = ({ children, className }) => {
  const language = className?.replace("language-", "") || "javascript";

  // Handle case where children is a React element
  const codeString =
    typeof children === "string" ? children : children?.props?.children || ""; // Extract code from MDX's `code` element

  return (
    <div className="code-block-wrapper">
      <div className="code-block-language">{language}</div>
      <SyntaxHighlighter
        language={language}
        style={dark}
        className="code-block"
      >
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;

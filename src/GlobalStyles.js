import React from "react";
import { createGlobalStyle } from "styled-components";

const CSSReset = createGlobalStyle`
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
`;

const GlobalCustomStyles = createGlobalStyle`
:root {
	--dark-blue: #141439;
	--regular-black: #000000;
	--regular-gray: #d3d3d3;
	--regular-turquoise: #259584;
	--light-blue: #40778c;
	--light-gray: #fafafa;
}
html, body {
	min-height: 100%;
	font-family: Geneva, Verdana, sans-serif;
	background-color: var(--light-gray);
}
h2 {
	font-size: 2.1rem;
	font-weight: bold;
}
h3 {
	font-size: 1.25rem;
	font-weight: bold;
}
a {
	text-decoration: none;
	color: white;
}
`;

const GlobalStyles = ({ children }) => {
  return (
    <React.Fragment>
      <CSSReset />
      <GlobalCustomStyles />
      {children}
    </React.Fragment>
  );
};

export { GlobalStyles };

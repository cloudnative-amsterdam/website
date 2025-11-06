exports.onRenderBody = ({ setHtmlAttributes, setHeadComponents }) => {
  setHtmlAttributes({ lang: 'en', prefix: 'og: http://ogp.me/ns#' });
  setHeadComponents([
    <script
      key="umami-analytics"
      defer
      src="https://cloud.umami.is/script.js"
      data-website-id="fdac0556-9492-4777-9cb3-1b22b8220aba"
    />,
  ]);
};

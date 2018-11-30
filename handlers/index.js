
const { errorResponse, successResponse } = require('./utils');

module.exports.index = async (event) => {
  console.log(event);
  return successResponse(`
  <!DOCTYPE html>
<html lang="en">
    <head>
        <meta charSet="utf-8"/>
        <meta http-equiv="x-ua-compatible" content="ie=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        <style data-href="/component---src-pages-index-js.880680f89ee2b553b85d.css">@import url(https://fonts.googleapis.com/css?family=Space+Mono:400,700&subset=latin-ext);html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,main,menu,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block}audio:not([controls]){display:none;height:0}progress{vertical-align:baseline}[hidden],template{display:none}a{background-color:transparent;-webkit-text-decoration-skip:objects}a:active,a:hover{outline-width:0}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:inherit;font-weight:bolder}dfn{font-style:italic}h1{font-size:2em;margin:.67em 0}mark{background-color:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}svg:not(:root){overflow:hidden}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}figure{margin:1em 40px}hr{box-sizing:content-box;height:0;overflow:visible}button,input,optgroup,select,textarea{font:inherit;margin:0}optgroup{font-weight:700}button,input{overflow:visible}button,select{text-transform:none}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-input-placeholder{color:inherit;opacity:.54}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}html{font:112.5%/1.45em georgia,serif;box-sizing:border-box;overflow-y:scroll}*,:after,:before{box-sizing:inherit}body{color:rgba(0,0,0,.8);font-family:georgia,serif;font-weight:400;word-wrap:break-word;-webkit-font-kerning:normal;font-kerning:normal;-ms-font-feature-settings:"kern","liga","clig","calt";-webkit-font-feature-settings:"kern","liga","clig","calt";font-feature-settings:"kern","liga","clig","calt"}img{max-width:100%;padding:0;margin:0 0 1.45rem}h1{font-size:2.25rem}h1,h2{padding:0;margin:0 0 1.45rem;color:inherit;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;font-weight:700;text-rendering:optimizeLegibility;line-height:1.1}h2{font-size:1.62671rem}h3{font-size:1.38316rem}h3,h4{padding:0;margin:0 0 1.45rem;color:inherit;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;font-weight:700;text-rendering:optimizeLegibility;line-height:1.1}h4{font-size:1rem}h5{font-size:.85028rem}h5,h6{padding:0;margin:0 0 1.45rem;color:inherit;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;font-weight:700;text-rendering:optimizeLegibility;line-height:1.1}h6{font-size:.78405rem}hgroup{padding:0;margin:0 0 1.45rem}ol,ul{padding:0;margin:0 0 1.45rem 1.45rem;list-style-position:outside;list-style-image:none}dd,dl,figure,p{padding:0;margin:0 0 1.45rem}pre{margin:0 0 1.45rem;font-size:.85rem;line-height:1.42;background:rgba(0,0,0,.04);border-radius:3px;overflow:auto;word-wrap:normal;padding:1.45rem}table{font-size:1rem;line-height:1.45rem;border-collapse:collapse;width:100%}fieldset,table{padding:0;margin:0 0 1.45rem}blockquote{padding:0;margin:0 1.45rem 1.45rem}form,iframe,noscript{padding:0;margin:0 0 1.45rem}hr{padding:0;margin:0 0 calc(1.45rem - 1px);background:rgba(0,0,0,.2);border:none;height:1px}address{padding:0;margin:0 0 1.45rem}b,dt,strong,th{font-weight:700}li{margin-bottom:.725rem}ol li,ul li{padding-left:0}li>ol,li>ul{margin-left:1.45rem;margin-bottom:.725rem;margin-top:.725rem}blockquote :last-child,li :last-child,p :last-child{margin-bottom:0}li>p{margin-bottom:.725rem}code,kbd,samp{font-size:.85rem;line-height:1.45rem}abbr,abbr[title],acronym{border-bottom:1px dotted rgba(0,0,0,.5);cursor:help}abbr[title]{text-decoration:none}td,th,thead{text-align:left}td,th{border-bottom:1px solid rgba(0,0,0,.12);font-feature-settings:"tnum";-moz-font-feature-settings:"tnum";-ms-font-feature-settings:"tnum";-webkit-font-feature-settings:"tnum";padding:.725rem .96667rem calc(.725rem - 1px)}td:first-child,th:first-child{padding-left:0}td:last-child,th:last-child{padding-right:0}code,tt{background-color:rgba(0,0,0,.04);border-radius:3px;font-family:SFMono-Regular,Consolas,Roboto Mono,Droid Sans Mono,Liberation Mono,Menlo,Courier,monospace;padding:.2em 0}pre code{background:none;line-height:1.42}code:after,code:before,tt:after,tt:before{letter-spacing:-.2em;content:" "}pre code:after,pre code:before,pre tt:after,pre tt:before{content:""}@media only screen and (max-width:480px){html{font-size:100%}}.Index_LogoWrapper{display:flex;justify-content:center;align-items:center;height:100%;position:relative}.LogoImage{width:312px}.Index_ContactUsWrapper{position:absolute;bottom:0;left:0;width:100%;height:30%;display:flex;justify-content:center;align-items:center;text-align:center}.Index_ContactUs{opacity:0;-webkit-animation:appear .5s ease-in 1.5s 1 forwards;animation:appear .5s ease-in 1.5s 1 forwards;font-family:Space Mono,monospace;color:#5f5f5f;font-size:12px}.Index_ContactUs a{color:#e32972;text-decoration:none;border-bottom:1px solid #e32972}@-webkit-keyframes appear{0%{opacity:0}to{opacity:1}}@keyframes appear{0%{opacity:0}to{opacity:1}}</style>
        <meta name="generator" content="Gatsby 2.0.55"/>
        <title data-react-helmet="true">Puente Technology and Design</title>
        <meta data-react-helmet="true" name="description" content="Puente Technology and Design"/>
        <meta data-react-helmet="true" name="keywords" content="software, design, technology"/>
        <link rel="shortcut icon" href="/icons/icon-48x48.png"/>
        <link rel="manifest" href="/manifest.webmanifest"/>
        <meta name="theme-color" content="#e2de00"/>
        <link as="script" rel="preload" href="/component---src-pages-index-js-1fbb9bcf35ebe93dc606.js"/>
        <link as="script" rel="preload" href="/0-ba6c40f50b811c3cea0f.js"/>
        <link as="script" rel="preload" href="/app-1c8ddf60f0ad508c4a5a.js"/>
        <link as="script" rel="preload" href="/webpack-runtime-e1d8522d87107242b6ed.js"/>
        <link rel="preload" href="/static/d/173/path---index-6a9-NZuapzHg3X9TaN1iIixfv1W23E.json" as="fetch" crossOrigin="use-credentials"/>
    </head>
    <body>
        <div id="___gatsby">
            <div style="outline:none" tabindex="-1" role="group">
                <div style="margin:0 auto;max-width:960px;padding:0px 1.0875rem 1.45rem;padding-top:0">
                    <div class="Index_LogoWrapper" style="height:600px">
                        <img class="LogoImage" src="/static/puente-logo-2cdbb018c739a2bb874efed453394f9d.svg" alt="Puente Logo"/>
                        <div class="Index_ContactUsWrapper">
                            <div class="Index_ContactUs">For more information contact us at 
                                <a href="mailto:info@puentedev.io">info@puentedev.io</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <script id="gatsby-script-loader">/*
            <![CDATA[*/window.page={"componentChunkName":"component---src-pages-index-js","jsonName":"index","path":"/"};window.dataPath="173/path---index-6a9-NZuapzHg3X9TaN1iIixfv1W23E";/*]]>*/
        </script>
        <script id="gatsby-chunk-mapping">/*
            <![CDATA[*/window.___chunkMapping={"app":["/app-1c8ddf60f0ad508c4a5a.js"],"component---src-pages-404-js":["/component---src-pages-404-js.a82bc48cfa31deea5b5f.css","/component---src-pages-404-js-73062b7c11adbcb48228.js"],"component---src-pages-index-js":["/component---src-pages-index-js.880680f89ee2b553b85d.css","/component---src-pages-index-js-1fbb9bcf35ebe93dc606.js"],"component---src-pages-page-2-js":["/component---src-pages-page-2-js.a82bc48cfa31deea5b5f.css","/component---src-pages-page-2-js-9c4e5de487a5f087e3f1.js"]};/*]]>*/
        </script>
        <script src="/webpack-runtime-e1d8522d87107242b6ed.js" async=""></script>
        <script src="/app-1c8ddf60f0ad508c4a5a.js" async=""></script>
        <script src="/0-ba6c40f50b811c3cea0f.js" async=""></script>
        <script src="/component---src-pages-index-js-1fbb9bcf35ebe93dc606.js" async=""></script>
    </body>
</html>
`, 200, {
    'Content-Type': 'text/html',
    'Access-Control-Allow-Origin': '*',
  });
};

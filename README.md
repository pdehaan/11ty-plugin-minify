# eleventy-plugin-minify


## INSTALLATION

```sh
npm i github:pdehaan/eleventy-plugin-minify -D
```

## USAGE

After installing the module, merge the following snippets to your .eleventy.js config file.

```js
const minify = require("eleventy-plugin-minify");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(minify);

  return {...};
};
```

By default this will minify HTML and JavaScript[1] assets if you have `NODE_ENV=production` or `ELEVENTY_ENV=production` set in your environment variables.

If you DON'T have `NODE_ENV` or `ELEVENTY_ENV` environment variables set to "production", this plugin will prettify the output using `prettier`.

If you want to only minify/prettify HTML output files, you can use the following `require()` statement:

```js
const minify = require("11ty-plugin-minify/html");
```

Similarly, if you only want to minify/prettify JavaScript[1] output files, you can use the following `require()` statement:

```js
const minify = require("11ty-plugin-minify/js");
```

## NOTES

[1] Currently Eleventy does not transform .js files in your output directory. One workaround is to define your site's JavaScript files in your site input directory /_includes/ folder, and then have another file such as /assets/site.js.liquid with something like the following:

```liquid
---
layout: ""
permalink: /assets/site.js
---

{%- include site.js -%}
```

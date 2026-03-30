// @ts-check
import { defineConfig } from "astro/config";

const base = "/sts_knowledgehub";

/** Remark plugin: prepends the base path to local image URLs in markdown body */
function remarkRebaseImages() {
  return (tree) => {
    function walk(node) {
      if (
        node.type === "image" &&
        node.url &&
        node.url.startsWith("/") &&
        !node.url.startsWith(base)
      ) {
        node.url = base + node.url;
      }
      if (node.children) node.children.forEach(walk);
    }
    walk(tree);
  };
}

// https://astro.build/config
export default defineConfig({
  site: "https://RJPhenom.github.io",
  base,
  markdown: {
    remarkPlugins: [remarkRebaseImages],
  },
});

import { docs, cookbooksCollection } from "@/.source";
import { loader } from "fumadocs-core/source";
import { createMDXSource } from "fumadocs-mdx";

export const source = loader({
  baseUrl: "/docs",
  source: docs.toFumadocsSource(),
});

export const cookbooks = loader({
  baseUrl: "/cookbooks",
  source: createMDXSource(cookbooksCollection),
});

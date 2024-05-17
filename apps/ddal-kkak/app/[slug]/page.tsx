import { generatePageMetadata } from "@/lib/util/generatePageMetadata";
import { MENU_ROUTER } from "constant/route";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import React from "react";
import { getPage } from "service/pages";
import { z } from "zod";
import { PageSchema } from "@/schemas/editor";
import renderBlock from "@/lib/util/renderBlock";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({
  params: { slug },
}: {
  params: { slug: string };
}): Promise<Metadata | undefined> {
  const segments = slug.split("-");
  const id = segments.pop();
  const page = await getPage(id);
  if (page && page.metaTagList) return generatePageMetadata(page.metaTagList);
}

export default async function page({ params }: Props) {
  const { slug } = params;
  const segments = slug.split("-");
  const id = segments.pop();
  const page = await getPage(id);

  if (!id || !page) redirect(MENU_ROUTER.dashboard.href);

  console.log(page);

  const dataList = page.uiJson.dataList as z.infer<
    typeof PageSchema.shape.dataList
  >;

  return <>{dataList?.map((block, index) => renderBlock(block, index))}</>;
}

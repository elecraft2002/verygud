import { createClient } from "@/prismicio";
import { PrismicRichText, SliceZone } from "@prismicio/react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { components } from "@/slices";

export default async function Home() {
  const client = createClient();
  const page = await client.getByUID("page", "home").catch(() => notFound());
  return (
    <>
      <SliceZone slices={page.data.slices} components={components} />
      <div className="h-screen"></div>
    </>
  );
}

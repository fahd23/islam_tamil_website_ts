import { Card, CardContent } from "@/components/ui/card";
import { simpleBlogCard } from "./lib/interface";
import { client, urlFor } from "./lib/sanity";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const revalidate = 30;

async function getData() {
  const blogQuery = `*[_type== "blog"] {
    title,
    "currentSlug": slug.current,
    smallDescription,
    titleImage
  }`;
  // const newBlogQuery = `*[_type== "blog"] | order(_createdAt desc)`;

  const data = await client.fetch(blogQuery);

  return data;
}
export default async function Home() {
  const data: simpleBlogCard[] = await getData();

  return (
    <main className="max-w-5xl mx-auto px-4 md:my-16">
      <div className="grid grid-cols-1 md:grid-cols-3 mt-5 gap-5 mx-4 md:mx-auto">
        {data.map((blog, idx) => (
          <Card key={idx}>
            <Image
              src={urlFor(blog.titleImage).url()}
              alt="blog-image"
              width={500}
              height={500}
              className="h-[200px] object-fill"
            />
            <CardContent className="mt-5">
              <h3 className="text-xl line-clamp-2">{blog.title}</h3>
              <p className="line-clamp-2 text-sm mt-2 text-gray-600 dark:text-gray-300">
                {blog.smallDescription}
              </p>
              <Button asChild className="w-full mt-7">
                <Link href={`/blog/${blog.currentSlug}`}>Read More</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}

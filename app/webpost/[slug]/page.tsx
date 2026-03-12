import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { Navbar } from "@/components/Navbar";
import Link from "next/link";
import React from "react";

function ReadingProgress() {
  "use client";

  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const updateProgress = () => {
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const nextProgress = maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0;
      setProgress(nextProgress);
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress);
    window.addEventListener("resize", updateProgress);
    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-50">
      <div style={{ width: `${progress}%` }} className="h-full bg-[#4682B4] transition-all duration-100" />
    </div>
  );
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) {
    return {
      title: "Post Not Found",
    };
  }
  return {
    title: `${post.title} | Webposts`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | Webposts`,
      description: post.excerpt,
      type: "article",
      url: `/webpost/${slug}`,
      publishedTime: post.date,
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | Webposts`,
      description: post.excerpt,
    },
    alternates: {
      canonical: `/webpost/${slug}`,
    },
  };
}

const components = {
  h1: (props: React.ComponentPropsWithoutRef<"h1">) => (
    <h1 className="text-4xl font-bold mt-8 mb-4 text-gray-900 dark:text-white tracking-tight" {...props} />
  ),
  h2: (props: React.ComponentPropsWithoutRef<"h2">) => (
    <h2 className="text-3xl font-bold mt-8 mb-3 text-gray-900 dark:text-white tracking-tight" {...props} />
  ),
  h3: (props: React.ComponentPropsWithoutRef<"h3">) => (
    <h3 className="text-2xl font-bold mt-6 mb-2 text-gray-900 dark:text-white" {...props} />
  ),
  p: (props: React.ComponentPropsWithoutRef<"p">) => (
    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed" {...props} />
  ),
  ul: (props: React.ComponentPropsWithoutRef<"ul">) => (
    <ul className="list-disc list-inside mb-4 text-gray-700 dark:text-gray-300 space-y-2" {...props} />
  ),
  ol: (props: React.ComponentPropsWithoutRef<"ol">) => (
    <ol className="list-decimal list-inside mb-4 text-gray-700 dark:text-gray-300 space-y-2" {...props} />
  ),
  li: (props: React.ComponentPropsWithoutRef<"li">) => <li className="ml-4" {...props} />,
  a: (props: React.ComponentPropsWithoutRef<"a">) => (
    <a
      className="text-[#4682B4] dark:text-[#5F9EA0] hover:underline"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  ),
  code: (props: React.ComponentPropsWithoutRef<"code">) => (
    <code
      className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-sm font-mono text-gray-900 dark:text-gray-100"
      {...props}
    />
  ),
  pre: (props: React.ComponentPropsWithoutRef<"pre">) => (
    <pre
      className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto mb-4"
      {...props}
    />
  ),
  blockquote: (props: React.ComponentPropsWithoutRef<"blockquote">) => (
    <blockquote
      className="border-l-4 border-[#4682B4] pl-4 italic my-4 text-gray-700 dark:text-gray-300"
      {...props}
    />
  ),
};

export default async function WebpostPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const formattedDate = new Date(post.date + 'T00:00:00').toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });

  return (
    <>
      <ReadingProgress />
      <Navbar />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
        <article className="container mx-auto px-6 py-12 max-w-3xl">
          <Link
            href="/webpost"
            className="inline-flex items-center gap-2 text-sm text-[#4682B4] hover:text-[#3a6fa0] font-medium group mb-8"
          >
            <span className="transition-transform group-hover:-translate-x-0.5">←</span>
            Back to Webposts
          </Link>

          <header className="mb-10 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-900/70 backdrop-blur-sm p-7 shadow-md">
            <h1 className="text-4xl md:text-5xl font-bold mb-5 text-gray-900 dark:text-white tracking-tight leading-tight">
              {post.title}
            </h1>
            <time className="mb-4">
              <span className="inline-flex items-center gap-1.5 text-sm text-gray-400 font-mono">
                📅 {formattedDate}
              </span>
            </time>
            <div className="flex flex-wrap gap-2 mt-4">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-semibold uppercase tracking-wide bg-[#4682B4]/12 dark:bg-[#5F9EA0]/20 text-[#1e3a5f] dark:text-[#E0F0FF] border border-[#4682B4]/20 dark:border-[#5F9EA0]/30 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </header>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <MDXRemote source={post.content} components={components} />
          </div>
        </article>
      </div>
    </>
  );
}

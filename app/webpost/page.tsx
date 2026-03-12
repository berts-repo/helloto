import { Navbar } from "@/components/Navbar";
import { WebpostClient } from "@/components/WebpostClient";
import { getAllTags, getPostSummaries } from "@/lib/posts";
import { Suspense } from "react";

export default function WebpostPage() {
  const allPosts = getPostSummaries();
  const allTags = getAllTags();

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-[#4682B4]/10 dark:from-[#4682B4]/15 to-transparent" />
        <main className="container mx-auto px-6 py-12 max-w-5xl">
          <Suspense fallback={null}>
            <WebpostClient posts={allPosts} tags={allTags} />
          </Suspense>
        </main>
      </div>
    </>
  );
}

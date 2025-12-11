import { useRoute } from "wouter";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { blogPosts } from "@/data/blogPosts";
import { Calendar, User, ArrowLeft, Facebook, Twitter } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function BlogDetail() {
  const [, params] = useRoute("/blog/:slug");
  const slug = params?.slug;

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-20 container mx-auto px-6 py-12 text-center">
          <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
          <Link href="/blog">
            <span className="text-primary hover:underline">Back to Blog</span>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const getTagColor = (tag: string) => {
    if (tag === "News") return "bg-orange-100 text-orange-700";
    if (tag === "Inspiration") return "bg-purple-100 text-purple-700";
    return "bg-primary/10 text-primary";
  };

  // Split content into paragraphs
  const paragraphs = post.content.split("\n\n").filter(p => p.trim());

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-20">
        <div className="container mx-auto px-6 py-12 max-w-4xl">
          {/* Back Button */}
          <Link href="/blog">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Blog</span>
            </motion.div>
          </Link>

          {/* Article Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="flex flex-wrap items-center gap-3 mb-4">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${getTagColor(tag)}`}
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-4xl lg:text-5xl font-display font-bold mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Author and Date */}
            <div className="flex items-center gap-4 mb-8 pb-8 border-b border-border">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-primary/10 flex items-center justify-center flex-shrink-0">
                {post.author.avatar ? (
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `<span class="text-primary font-bold text-lg">${post.author.name.charAt(0)}</span>`;
                      }
                    }}
                  />
                ) : (
                  <span className="text-primary font-bold text-lg">{post.author.name.charAt(0)}</span>
                )}
              </div>
              <div className="flex-1">
                <p className="font-semibold text-foreground">{post.author.name}</p>
                <p className="text-sm text-muted-foreground">{post.author.role}</p>
              </div>
              <div className="text-sm text-muted-foreground flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
            </div>
          </motion.div>

          {/* Article Content */}
          <motion.article
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            {/* Drop Cap First Paragraph */}
            {paragraphs.length > 0 && (
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
                <span className="text-primary font-serif text-4xl md:text-5xl lg:text-6xl float-left leading-none mr-2 mt-1">
                  {paragraphs[0].charAt(0)}
                </span>
                {paragraphs[0].substring(1)}
              </p>
            )}

            {/* Remaining Paragraphs */}
            {paragraphs.slice(1).map((paragraph, index) => (
              <p
                key={index}
                className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6"
              >
                {paragraph}
              </p>
            ))}
          </motion.article>

          {/* Social Share */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 pt-8 border-t border-border"
          >
            <div className="flex items-center gap-4">
              <span className="text-sm font-semibold text-foreground">Share:</span>
              <div className="flex gap-3">
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center text-primary transition-colors"
                  aria-label="Share on Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(post.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center text-primary transition-colors"
                  aria-label="Share on Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Related Posts */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 pt-12 border-t border-border"
          >
            <h2 className="text-2xl font-display font-bold mb-6">Related Articles</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {blogPosts
                .filter((p) => p.id !== post.id)
                .slice(0, 2)
                .map((relatedPost) => (
                  <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`}>
                    <div className="bg-background rounded-lg border border-border p-6 hover:shadow-lg transition-shadow cursor-pointer">
                      <h3 className="text-xl font-display font-bold mb-2 hover:text-primary transition-colors">
                        {relatedPost.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                    </div>
                  </Link>
                ))}
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}


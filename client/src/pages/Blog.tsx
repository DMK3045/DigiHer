import { Link, useLocation } from "wouter";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { blogPosts } from "@/data/blogPosts";
import { Calendar, ArrowRight, User } from "lucide-react";
import { motion } from "framer-motion";

export default function Blog() {
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  const getTagColor = (tag: string) => {
    if (tag === "News") return "bg-orange-100 text-orange-700";
    if (tag === "Inspiration") return "bg-purple-100 text-purple-700";
    return "bg-primary/10 text-primary";
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-20">
        <div className="container mx-auto px-6 py-12">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-display font-bold mb-4">Blog</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Insights, stories, and inspiration about women in the digital age
            </p>
          </div>

          {/* Featured Article */}
          {featuredPost && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <div className="grid lg:grid-cols-2 gap-8 items-center bg-background rounded-2xl overflow-hidden border border-border shadow-lg">
                {/* Featured Image */}
                <div className="relative h-[400px] lg:h-[500px]">
                  <img
                    src={featuredPost.featuredImage}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop";
                    }}
                  />
                </div>

                {/* Featured Content */}
                <div className="p-8 lg:p-12">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    {featuredPost.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${getTagColor(tag)}`}
                      >
                        {tag}
                      </span>
                    ))}
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {featuredPost.date}
                    </span>
                  </div>

                  <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4 leading-tight">
                    {featuredPost.title}
                  </h2>

                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    {featuredPost.excerpt}
                  </p>

                  <Link href={`/blog/${featuredPost.slug}`}>
                    <span className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all cursor-pointer">
                      Read Article
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}

          {/* Recent Blogs Header */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-8"
          >
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-left">
              Recent Blogs
            </h2>
          </motion.div>

          {/* Regular Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {regularPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="bg-background rounded-xl border border-border shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group h-full flex flex-col">
                    {/* Post Image */}
                    <div className="relative h-48 overflow-hidden rounded-t-xl">
                      <img
                        src={post.featuredImage}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop";
                        }}
                      />
                    </div>

                    {/* Post Content */}
                    <div className="p-6 flex-grow flex flex-col">
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className={`px-2 py-1 rounded-full text-xs font-semibold ${getTagColor(tag)}`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <h3 className="text-xl font-display font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>

                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2 flex-grow">
                        {post.excerpt}
                      </p>

                      {/* Author Info */}
                      <div className="flex items-center gap-3 pt-4 border-t border-border">
                        <div className="w-10 h-10 rounded-full overflow-hidden bg-primary/10 flex items-center justify-center">
                          {post.author.avatar ? (
                            <img
                              src={post.author.avatar}
                              alt={post.author.name}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                const parent = target.parentElement;
                                if (parent) {
                                  parent.innerHTML = `<span class="text-primary font-bold">${post.author.name.charAt(0)}</span>`;
                                }
                              }}
                            />
                          ) : (
                            <span className="text-primary font-bold">{post.author.name.charAt(0)}</span>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold text-foreground truncate">
                            {post.author.name}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            Updated on: {post.updatedDate || post.date}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}


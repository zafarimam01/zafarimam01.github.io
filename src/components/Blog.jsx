import { posts } from '../data/blog.js'
import './Blog.css'

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

function Blog() {
  return (
    <section id="blog" className="section blog">
      <div className="container">
        <p className="section-eyebrow">05 // blog</p>
        <h2 className="section-title">Notes &amp; write-ups</h2>
        <p className="blog-note">
          Placeholder posts — edit <code>src/data/blog.js</code> to add your own writing.
        </p>

        <div className="blog-list">
          {posts.map((post) => (
            <article key={post.id} className="blog-item">
              <div className="blog-item-meta">
                <span className="blog-item-filename">{post.fileName}</span>
                <span className="blog-item-date">{formatDate(post.date)}</span>
              </div>
              <h3 className="blog-item-title">{post.title}</h3>
              <p className="blog-item-excerpt">{post.excerpt}</p>
              <span className="pill blog-item-readtime">{post.readTime} read</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog

import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function BlogPosts({ posts }: any) {
  return (
    <div className="row">
      <h1 className="text-center my-3">
        List of Blogs <span className="badge bg-secondary">{posts.length}</span>
      </h1>
      <div className="col-md-4 offset-md-2">
        <div className="card-columns">
          {posts.map((post: any) => (
            <div
              className="card rounded-0"
              style={{
                width: "20rem",
              }}
              key={post.id}
            >
              <Image
                src={post.image ? post.image[0].url : "/images/default.jpg"}
                alt={post.title}
                width={300}
                height={200}
                className="card-img-top rounded-0"
              />

              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.excerpt}</p>
                <Link
                  href={`/posts/${post.slug}`}
                  className="btn btn-outline-primary"
                >
                  Read more..
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

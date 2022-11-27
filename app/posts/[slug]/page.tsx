import Image from "next/image";
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getPost } from "services/api";

export default async function Post({ params }: any) {
  const { data } = await getPost(params.slug);
  return (
    <div className="container text-center my-5">
      {data.map((post: any) => (
        <div key={post.id}>
          {/* banner image */}

          <Image
            src={post.image[0].url}
            alt={post.title}
            className="rounded"
            width={800}
            height={400}
          />
          <div
            className="text-center py-2"
            style={{
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            <h1>{post.title}</h1>
            <p>{post.excerpt}</p>
            <p>{post.content}</p>
            {/* <p> */}
            {/* eslint-disable-next-line react/no-children-prop */}
            <>
              {" "}
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {post.content}
              </ReactMarkdown>
            </>
            {/* </p> */}
          </div>
        </div>
      ))}
    </div>
  );
}

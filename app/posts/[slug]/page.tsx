import React from "react";
import { getPost } from "services/api";

export default async function Post({ params }: any) {
  const { data } = await getPost(params.slug);
  console.log(data);
  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.content}</p>
    </div>
  );
}

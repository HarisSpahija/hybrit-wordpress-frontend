import React from "react";

export default function HomePage(props) {
    const { posts } = props;

    return (
        <div class="posts-container">
            {posts.map((post, index) => (
                <div class="post" key={index}>
                    <h1 class={"post-title"}>{post.title.rendered}</h1>
                    <div
                        class={"post-content"}
                        dangerouslySetInnerHTML={{
                            __html: post.excerpt.rendered
                        }}
                    />
                </div>
            ))}
        </div>
    );
}

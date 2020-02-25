import React from "react";
import { Helmet } from "react-helmet";

export default function ExamplePage(props) {
    const {
        page,
        page: { yoast_title, yoast_meta }
    } = props;

    return (
        <div class={"page"}>
            <Helmet>
                <title>{yoast_title}</title>
                {yoast_meta.map(meta_value => {
                    return (
                        <meta
                            name={meta_value.name || meta_value.property}
                            content={meta_value.content}
                        />
                    );
                })}
            </Helmet>
            <h1 class={"page-title"}>{page.title.rendered}</h1>
            <div
                class={"page-content"}
                dangerouslySetInnerHTML={{
                    __html: props.page.content.rendered
                }}
            />
        </div>
    );
}

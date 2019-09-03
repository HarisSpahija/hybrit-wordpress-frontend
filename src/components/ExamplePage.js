import React from 'react'

export default function ExamplePage(props) {
    const { page } = props;
    return (
        <div class={"page"}>
            <h1 class={"page-title"}>{page.title.rendered}</h1>
            <div class={"page-content"} dangerouslySetInnerHTML={{ __html: props.page.content.rendered }}/>
        </div>
    )
}

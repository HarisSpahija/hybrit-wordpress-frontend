import React, { Fragment } from "react";
import axios from "axios";
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
} from "react-router-dom";
import ExamplePage from "./components/ExamplePage";
import HomePage from "./components/HomePage";
import "./App.css";

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pages: [],
            posts: []
        };
    }

    getAllPages = async () => {
        let res = await axios.get(
            `http://localhost:8000/?rest_route=/wp/v2/pages`
        );
        let { data } = await res;

        this.setState({ pages: data });
    };

    getAllPosts = async () => {
        let res = await axios.get(
            `http://localhost:8000/?rest_route=/wp/v2/posts`
        );
        let { data } = await res;

        this.setState({ posts: data });
    };

    componentDidMount = async () => {
        await this.getAllPages();
        await this.getAllPosts();
    };

    render() {
        const { pages, posts } = this.state;

        return (
            <Router>
                <Fragment>
                    {/* Links */}
                    <div class="topnav">
                        <Link to={"/"}>Home</Link>
                        {pages.map((page, index) => {
                            return <Link to={page.slug}>{page.slug}</Link>;
                        })}
                    </div>

                    {/* Routing */}
                    <Switch>
                        {pages.map((page, index) => {
                            return (
                                <Route
                                    exact
                                    key={index}
                                    path={`/${page.slug}`}
                                    render={props => (
                                        <ExamplePage {...props} page={page} />
                                    )}
                                />
                            );
                        })}

                        {/* Default Route */}
                        <Route
                            exact
                            path={`/`}
                            render={props => (
                                <HomePage {...props} posts={posts} />
                            )}
                        />
                    </Switch>
                </Fragment>
            </Router>
        );
    }
}

import React from "react";
import { Button, Form } from 'semantic-ui-react';

const BlogPosts = () => {
    return(
        <div className="Blog">
            <div className="post">
            <Button href="https://dev.to/soiymiilk/phase-1-coding-for-the-future-5gi0">
                Phase 1: Coding For the Future
            </Button>
            </div>
            <div className="post">
            <Button href="https://dev.to/soiymiilk/my-first-mvc-app-4n79">
                Phase 2: My first MVC app
            </Button>
            </div>
            <div className="post">
            <Button href="https://dev.to/soiymiilk/let-s-build-a-rails-app-5hb7">
                Phase 3: Let's Build a Rails App!
            </Button>
            </div>
            <div className="post">
            <Button href="https://dev.to/soiymiilk/javascript-to-the-stars-2gen">
                Phase 4: Javascript to The Stars
            </Button>
            </div>
            <div className="post">
            <Button href="https://dev.to/soiymiilk/phase-1-coding-for-the-future-5gi0">
                Phase 5: Coding For the Future
            </Button>
            </div>
        </div>
    )
}

export default BlogPosts;
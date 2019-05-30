import React from 'react';
import { useFetch } from '../hooks';

const Stories = () => {

    const stories = useFetch("https://news-proxy-server.appspot.com/topstories", []);

    return (
        <div className="container" >
            <div className="row">
                <div className="col-md-12">
                    <h3 className="text-center" >TOP STORIES</h3>
                </div>
                { 
                    stories.map(story => {
                        return (
                            <div className="col-md-6">
                                <h3><a href={story.url} >{story.title}</a></h3>
                                <h5> By : {story.by}</h5>
                                <h5> At { new Date(story.time).toLocaleString() }</h5>
                            </div>
                        )
                    }) 
                }
            </div>
        </div>
    )
}

export default Stories;
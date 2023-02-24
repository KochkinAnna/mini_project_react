import {useEffect, useState} from "react";

import {moviesService} from "../../services";

import {Video} from "../Video/Video";

const Videos = ({movieId}) => {

    const [videos, setVideos] = useState([]);

    useEffect(() => {
        moviesService.getVideoById(movieId).then(({data}) => {
            setVideos(data.results)
        })
    }, [movieId])

    const filtredVideos = videos.filter((video) => video.type === 'Trailer')

    return (
        <div>
            {filtredVideos.map(video => <Video key={video.id} video={video}/>)}
        </div>
    );
}

export {Videos};
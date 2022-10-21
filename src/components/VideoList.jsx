import React from 'react';
import VideoItem from './VideoItem';

const VideoList = (props) => {
    const renderedList = props.ytVideos.map((ytVideo) => {
        return <VideoItem videoSelect={props.videoSelect} key={ytVideo.id.videoId} video={ytVideo} />
    });



    return (
        <div className="ui relaxed divided list">
            {renderedList}
        </div>
    )
}

export default VideoList;
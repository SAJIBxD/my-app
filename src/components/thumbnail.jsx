import React from 'react';

const Thumbnail = ({ video }) => {
    return (
        <div className="thumbnail">
            <img src={video.thumbnailUrl} alt={video.title} />
            <div className="thumbnail-info">
                <h4>{video.title}</h4>
                <p>{video.description}</p>
            </div>
        </div>
    );
};

export default Thumbnail;
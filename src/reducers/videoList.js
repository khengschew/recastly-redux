import Redux from 'redux';
import sampleData from '../data/exampleVideoData';

var videoListReducer = (state = sampleData, action) => {
  switch (action.type) {
    case 'CHANGE_VIDEO_LIST':
      return action.videos;

    default:
      return [];
  }
};

export default videoListReducer;

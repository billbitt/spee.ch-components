import { combineReducers } from 'redux';
import PublishReducer from './publish';
import ChannelReducer from './channel';
import ShowReducer from './show';
import SiteReducer from './site';

export default combineReducers({
  channel: ChannelReducer,
  publish: PublishReducer,
  show   : ShowReducer,
  site   : SiteReducer,
});

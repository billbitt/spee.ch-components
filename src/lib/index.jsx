// app, reducers, sagas, actions
import App from './app';
import Reducers from './reducers';
import Sagas from './sagas';
import Actions from './actions';
// containers
import AboutPage from './pages/AboutPage';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ShowPage from './pages/ShowPage';
import AssetDisplay from './containers/AssetDisplay';
import AssetInfo from './containers/AssetInfo';
import AssetTitle from './containers/AssetTitle';
import ChannelClaimsDisplay from './containers/ChannelClaimsDisplay';
import ChannelCreateForm from './containers/ChannelCreateForm';
import ChannelLoginForm from './containers/ChannelLoginForm';
import ChannelSelect from './containers/ChannelSelect';
import Dropzone from './containers/Dropzone';
import FourOhFourPage from './containers/FourOhFourPage';
import NavBar from './containers/NavBar';
import PublishDetails from './containers/PublishDetails';
import PublishDisabledMessage from './containers/PublishDisabledMessage';
import PublishMetadataInputs from './containers/PublishMetadataInputs';
import PublishStatus from './containers/PublishStatus';
import PublishThumbnailInput from './containers/PublishThumbnailInput';
import PublishTitleInput from './containers/PublishTitleInput';
import PublishTool from './containers/PublishTool';
import PublishUrlInput from './containers/PublishUrlInput';
import ShowAssetDetails from './containers/ShowAssetDetails';
import ShowAssetLite from './containers/ShowAssetLite';
import ShowChannel from './containers/ShowChannel';
// components
import ActiveStatusBar from './components/ActiveStatusBar';
import AssetPreview from './components/AssetPreview';
import ExpandingTextArea from './components/ExpandingTextArea';
import GAListener from './components/GAListener';
import InactiveStatusBar from './components/InactiveStatusBar';
import Logo from './components/Logo';
import NavBarChannelOptionsDropdown from './components/NavBarChannelOptionsDropdown';
import ProgressBar from './components/ProgressBar';
import PublishPreview from './components/PublishPreview';
import PublishUrlMiddleDisplay from './components/PublishUrlMiddleDisplay';
import SEO from './components/SEO';


// can it be a function and pass in the config like this?,
// or should all the configs just come from the store (assuming the initial config can be used to config the store)?
module.exports = {
    App,
    Reducers: Reducers(siteConfig),
    Sagas, // includes all the sagas
    Actions, // includes all the actions
    AboutPage,
    ErrorPage,
    HomePage,
    LoginPage,
    ShowPage,
    AssetDisplay,
    AssetInfo,
    AssetTitle,
    ChannelClaimsDisplay,
    ChannelCreateForm,
    ChannelLoginForm,
    ChannelSelect,
    Dropzone,
    FourOhFourPage,
    NavBar,
    PublishDetails,
    PublishDisabledMessage,
    PublishMetadataInputs,
    PublishStatus,
    PublishThumbnailInput,
    PublishTitleInput,
    PublishTool,
    PublishUrlInput,
    ShowAssetDetails,
    ShowAssetLite,
    ShowChannel,
    ActiveStatusBar,
    AssetPreview,
    ExpandingTextArea,
    GAListener,
    InactiveStatusBar,
    Logo,
    NavBarChannelOptionsDropdown,
    ProgressBar,
    PublishPreview,
    PublishUrlMiddleDisplay,
    SEO,
};

import Alert from './Alert/index.tsx';
import AnimationImageLoader from './AnimationImageLoader';
import AudioPlayer from './AudioPlayer';
import Avatar from './Avatar/index.tsx';
import BackTop from './BackTop/index.tsx';
import Badge from './Badge/index.tsx';
import Breadcrumb from './Breadcrumb/index.tsx';
import Button from './Button/index.tsx';
import Cascader from './Cascader/index.tsx';
import Carousel from './Carousel/index.tsx';
import Checkbox from './Checkbox/index.tsx';
import Card from './Card/index.tsx';
import Col from './Col/index.tsx';
import ColorPicker from './ColorPicker';
import {TimePicker, DatePicker} from './DatePicker';
import Drawer from './Drawer';
import Dropdown from './Dropdown/index.tsx';
import Divider from './Divider/index.tsx';
import Form from './Form/index.tsx';
import ImageLoader from './ImageLoader';
import Layout from './Layout/index.tsx';
import LoadMore from './LoadMore';
import List from './List/index.tsx';
import Input from './Input/index.tsx';
import InputNumber from './Input-number/index.tsx';
import Menu from './Menu/index.tsx';
import message from './Message/index.tsx';
import Modal from './Modal/index.tsx';
import notification from './Notification/index.tsx';
import Pagination from './Pagination/index.tsx';
import PicturePreview from './PicturePreview';
import Popover from './Popover/index.tsx';
import Progress from './Progress/index.tsx';
import Radio from './Radio/index.tsx';
import RichEditor from './RichEditor';
import Row from './Row/index.tsx';
import Select from './Select';
import SearchInput from './SearchInput';
import Slider from './Slider/index.tsx';
import Spin from './Spin/index.tsx';
import Icon from './Icon/index.tsx';
import StickVerticalMenu from './StickVerticalMenu';
import Switch from './Switch/index.tsx';
import Table from './Table/index.tsx';
import Tabs from './Tabs/index.tsx';
import Tag from './Tag/index.tsx';
import TextOverflow from './TextOverflow';
import Tooltip from './Tooltip/index.tsx';
import Transfer from './Transfer/index.tsx';
import TreeSelect from './TreeSelect/index.tsx';
import Upload from './Upload/index.tsx';
import VideoViewer from './VideoViewer';
import Echart from './EChart';

//<!--utils相关
import * as bom from '../utils/bom';
import * as dom from '../utils/dom';
import * as number from '../utils/number';
import {iframeC} from '../utils/iframeC';
import * as other from '../utils/other';
import * as upload from '../utils/upload';
//-->utils相关

// 通用组件从这里暴露
export {Alert};
export {AnimationImageLoader};
export {AudioPlayer};
export {Avatar};
export {BackTop};
export {Badge};
export {Breadcrumb};
export {Button};
export {Card};
export {Cascader};
export {Carousel};
export {Checkbox};
export {Col};
export {ColorPicker};
export {DatePicker};
export {Drawer};
export {Dropdown};
export {Divider};
export {Form};
export {ImageLoader};
export {Icon};
export {Layout};
export {LoadMore};
export {List};
export {Input};
export {InputNumber};
export {Menu};
export {message};
export {Modal};
export {notification};
export {Pagination};
export {PicturePreview};
export {Progress};
export {Radio};
export {Row};
export {Popover};
export {RichEditor};
export {Select};
export {SearchInput};
export {StickVerticalMenu};
export {Switch};
export {Table};
export {Slider};
export {Spin};
export {Tabs};
export {Tag};
export {TextOverflow};
export {TimePicker};
export {Tooltip};
export {Transfer}
export {TreeSelect};
export {Upload};
export {VideoViewer};
export {Echart};

const util = {
  bom, dom, number, other, upload, iframeC
};
export {util};

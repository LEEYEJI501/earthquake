import { TiconName } from "./Common/Icon";

export enum AppBarItemType {
  IconButton,
  Text,
  Input,
}

export interface IAppBarItem {
  type: AppBarItemType;
  iconName?: TiconName;
  clickEvent?: Function;
}

import { TiconName } from "./Common/Icon";

export enum BottomItemType {
  IconButton,
  Text,
}

export interface IBottomItem {
  type: BottomItemType;
  iconName?: TiconName;
  clickEvent?: Function;
  addClass?: string;
  title?: string;
}

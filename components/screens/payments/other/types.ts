import { IFooterItem } from "../../../layouts/footer/types";

export interface IotherItem extends Pick<IFooterItem, 'iconName'>{
    title: string

}
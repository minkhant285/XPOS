import { ID } from './types';
import { NotificationTypes, NotificationInfoTypes, ActionTypes } from './enums';
import { CxData } from './common.model';

export interface Notification {
    id: ID, 
    title: string,
    content: string,
    type: NotificationTypes,
    infoType: NotificationInfoTypes,
    dataList: CxData[],
    sound: string,
    userID: ID,
    actionRequired: boolean,
    renotify: boolean,
    read: boolean,
    silent: boolean,
    actions: NotificationAction[]
    notifiedOn: Date,
}

export interface NotificationAction {
    type: ActionTypes,
    dataList: CxData[]
}

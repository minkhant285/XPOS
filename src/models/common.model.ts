export interface CxData {
    name: string,
    value: any,
    type: CxDataTypes
}

export enum CxDataTypes {
    Number,
    Text,
    Date,
    URL,
    ID
}

export interface IEntity {
    data: any[],
    meta: IEntMeta
}

export interface IField {
    type: string,
    key: string,
    title: string,
    readonly?: boolean,
    useDict?: boolean,
    dctKey?: string
}

export interface IEntMeta {
    total: number,
    fields: IField[]
}

export interface ContentModel {
    id: number,
    title: string,
    content: ContentWithTypeModel[]
}

export interface ContentWithTypeModel {
    type: ContentTypes,
    content: string
}

export enum ContentTypes {
    Image = "Imagen",
    Text = "Texto",
    Subtitle = "Subtitulo"
}


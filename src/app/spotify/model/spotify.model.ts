export interface IExternalUrls {
    spotify: string;
    [serviceName: string]: string;
}

export interface IArtist {
    external_urls: IExternalUrls;
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;
}

export interface IImage {
    height: number;
    url: string;
    width: number;
}

export interface IAlbum {
    album_type: string;
    artists: IArtist[];
    available_markets: string[];
    external_urls: IExternalUrls;
    href: string;
    id: string;
    images: IImage[];
    name: string;
    type: string;
    uri: string;
}

export interface IAlbumDetails {
        artists:  IArtist[];
        available_markets: string[];
        disc_number: number;
        duration_ms: number;
        explicit: boolean;
        external_urls: IExternalUrls;
        href: string;
        id: string;
        name: string;
        preview_url: string;
        track_number: number;
        type: string;
        uri: string;
    }

export enum Size { lg, md, sm }
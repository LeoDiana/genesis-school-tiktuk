export interface TrendingFeedItem {
    id: string;
    secretID: string;
    text: string;
    createTime: number;
    authorMeta: AuthorMeta;
    musicMeta: MusicMeta;
    covers: Covers;
    webVideoUrl: string;
    videoUrl: string;
    videoUrlNoWaterMark: string;
    videoApiUrlNoWaterMark: string;
    videoMeta: VideoMeta;
    diggCount: number;
    shareCount: number;
    playCount: number;
    commentCount: number;
    downloaded: boolean;
    mentions: any[];
    hashtags: Hashtag[];
    effectStickers: any[];
}

export interface AuthorMeta {
    id: string;
    secUid: string;
    name: string;
    nickName: string;
    verified: boolean;
    signature: string;
    avatar: string;
    following: number;
    fans: number;
    heart: number;
    video: number;
    digg: number;
}

export interface Covers {
    default: string;
    origin: string;
    dynamic: string;
}

export interface Hashtag {
    id: string;
    name: string;
    title: string;
    cover: string;
}

export interface MusicMeta {
    musicId: string;
    musicName: string;
    musicAuthor: string;
    musicOriginal: boolean;
    musicAlbum: string;
    playUrl: string;
    coverThumb: string;
    coverMedium: string;
    coverLarge: string;
    duration: number;
}

export interface VideoMeta {
    height: number;
    width: number;
    duration: number;
}

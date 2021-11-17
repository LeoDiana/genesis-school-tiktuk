// types generated from response

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

export interface UserInfoResponse {
    user: User;
    stats: UserInfoStats;
    itemList: any[];
}

export interface UserInfoStats {
    followerCount: number;
    followingCount: number;
    heart: number;
    heartCount: number;
    videoCount: number;
    diggCount: number;
}

export interface User {
    id: string;
    shortId: string;
    uniqueId: string;
    nickname: string;
    avatarLarger: string;
    avatarMedium: string;
    avatarThumb: string;
    signature: string;
    createTime: number;
    verified: boolean;
    secUid: string;
    ftc: boolean;
    relation: number;
    openFavorite: boolean;
    commentSetting: number;
    duetSetting: number;
    stitchSetting: number;
    privateAccount: boolean;
    secret: boolean;
    isADVirtual: boolean;
    roomId: string;
}

export interface UserFeed {
    statusCode: number;
    itemList: UserFeedItem[];
    cursor: string;
    hasMore: boolean;
}

export interface UserFeedItem {
    id: string;
    desc: string;
    createTime: number;
    video: Video;
    author: Author;
    music: Music;
    challenges: Challenge[];
    stats: ItemListStats;
    duetInfo: DuetInfo;
    originalItem: boolean;
    officalItem: boolean;
    textExtra: TextExtra[];
    secret: boolean;
    forFriend: boolean;
    digged: boolean;
    itemCommentStatus: number;
    showNotPass: boolean;
    vl1: boolean;
    itemMute: boolean;
    effectStickers?: EffectSticker[];
    authorStats: AuthorStats;
    privateItem: boolean;
    duetEnabled: boolean;
    stitchEnabled: boolean;
    shareEnabled: boolean;
    isAd: boolean;
    duetDisplay: number;
    stitchDisplay: number;
    stickersOnItem?: StickersOnItem[];
    warnInfo?: WarnInfo[];
}

export interface Author {
    id: string;
    uniqueId: string;
    nickname: string;
    avatarThumb: string;
    avatarMedium: string;
    avatarLarger: string;
    signature: string;
    verified: boolean;
    secUid: string;
    secret: boolean;
    ftc: boolean;
    relation: number;
    openFavorite: boolean;
    commentSetting: number;
    duetSetting: number;
    stitchSetting: number;
    privateAccount: boolean;
}

export interface AuthorStats {
    followingCount: number;
    followerCount: number;
    heartCount: number;
    videoCount: number;
    diggCount: number;
    heart: number;
}

export interface Challenge {
    id: string;
    title: string;
    desc: string;
    profileThumb: string;
    profileMedium: string;
    profileLarger: string;
    coverThumb: string;
    coverMedium: string;
    coverLarger: string;
    isCommerce: boolean;
}

export interface DuetInfo {
    duetFromId: string;
}

export interface EffectSticker {
    name: string;
    ID: string;
}

export interface Music {
    id: string;
    title: string;
    playUrl: string;
    coverThumb: string;
    coverMedium: string;
    coverLarge: string;
    authorName: string;
    original: boolean;
    duration: number;
    album: string;
}

export interface ItemListStats {
    diggCount: number;
    shareCount: number;
    commentCount: number;
    playCount: number;
}

export interface StickersOnItem {
    stickerType: number;
    stickerText: string[];
}

export interface TextExtra {
    awemeId: string;
    start: number;
    end: number;
    hashtagName: string;
    hashtagId: string;
    type: number;
    userId: string;
    isCommerce: boolean;
    userUniqueId: string;
    secUid: string;
    subType: number;
}

export interface Video {
    id: string;
    height: number;
    width: number;
    duration: number;
    ratio: string;
    cover: string;
    originCover: string;
    dynamicCover: string;
    playAddr: string;
    downloadAddr: string;
    shareCover: string[];
    reflowCover: string;
    bitrate: number;
    encodedType: string;
    format: string;
    videoQuality: string;
    encodeUserTag: string;
    codecType: string;
    definition: string;
}

export interface WarnInfo {
    text: string;
    url: string;
    type: number;
    lang: string;
    key: string;
}

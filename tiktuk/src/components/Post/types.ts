import { AuthorMeta, Hashtag } from '../../common/types';

export interface PostProp {
    id: string;
    text: string;
    authorMeta: AuthorMeta;
    videoUrl: string;
    diggCount: number;
    commentCount: number;
    hashtags: Hashtag[];
    playing: boolean;
    // eslint-disable-next-line no-unused-vars
    onClick: (videoId: string)=>void;
    // eslint-disable-next-line no-unused-vars
    inView: (videoId: string)=>void;
    [others: string]: any;
}

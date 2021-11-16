import { AuthorMeta, Hashtag } from '../../common/types';

export interface PostProp {
    id: string;
    text: string;
    authorMeta: AuthorMeta;
    videoUrl: string;
    diggCount: number;
    commentCount: number;
    hashtags: Hashtag[];
    [others: string]: any;
}

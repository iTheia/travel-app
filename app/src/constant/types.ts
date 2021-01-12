export interface IUser {
    role: string;
    avatar: string;
    username: string;
    id: number;
}

export interface IPost {
    id: number;
    title: string;
    image: string;
}
export interface IComment {
    id: number;
    comment: string;
    author: {
        name: string;
        avatar: string;
    };
}

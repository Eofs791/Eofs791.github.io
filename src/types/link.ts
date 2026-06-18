export interface Link {
    url: string;
    avatar: string;
    title: string;
    name?: string;
    desc?: string;
}

export interface LinkCategory {
    title: string;
    desc: string;
    links: Link[];
}
export interface Link {
    url: string;
    avatar: string;
    name: string;
    desc?: string;
}

export interface LinkCategory {
    name: string;
    desc: string;
    links: Link[];
}
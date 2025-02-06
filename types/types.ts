export interface BlogCardProps {
    slug: string
}
export interface MetaInfo {
    title?: string;
    url?: string;
    description?: string;
    author?: string;
    date?: string;
    type?: string;
}
export interface Info {
    slug?: string;
    metadata: MetaInfo
}

export interface EmailTemplateProps {
    name: string;
    phone: string;
    email: string;
    topic: string;
    message: string;
}
export interface ProjectCardProps {
    name: string;
    type: string;
    id?: number;
    description: string;
    links: string;
    imgs: {
        webp: string;
        jpg: string;
        alt: string;
    }
}
export interface FormProps {
    isError: boolean;
    isCompleted: boolean;
    message: string;
    errors: {};
}
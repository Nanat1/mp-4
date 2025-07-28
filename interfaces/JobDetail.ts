export interface JobDetail {
    id: number;
    role: string;
    company_name: string;
    location: string;
    remote: boolean;
    url: string;
    text: HTMLElement | null;
}
import {JobDetail} from "@/interfaces/JobDetail";

export interface JobData {
    ip: string;
    count: number;
    next: string;
    previous: string;
    results: JobDetail[];
}
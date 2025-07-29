import JobList from '@/components/JobList';

interface JobListProps {
    params: {
        pageNo: string;
    };
}
export default async function JobListPage({params}: JobListProps) {
    const pageNo = decodeURIComponent(params.pageNo);

    return(
            <main id="main-wrapper">
                <JobList pageNo={pageNo} />
            </main>
    )
}
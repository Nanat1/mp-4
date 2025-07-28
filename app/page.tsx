"use client";

import Link from "next/link";
import {useState} from "react";

function Home() {
    const [pageNo, setPageNo] = useState(1);

    return (
        <div>
            Would you like to see our Job List?
            <Link href={`/${pageNo}`}>Go</Link>
        </div>
    );
}
export default Home
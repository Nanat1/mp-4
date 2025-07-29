"use client";

import Link from "next/link";
import {useState} from "react";

function Home() {
    const [pageNo, setPageNo] = useState(1);

    return (
        <main id="main-wrapper">
            <main>
                <div>
                    <h2>Would you like to see our Job List?</h2>
                    <Link href={`/${pageNo}`}>Go</Link>
                </div>
            </main>
        </main>
    );
}
export default Home
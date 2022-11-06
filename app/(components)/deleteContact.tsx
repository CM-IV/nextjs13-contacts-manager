'use client';

import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { db } from "../(db)/pbInit";

export default function DeleteContact() {

    const router = useRouter();
    const pathname = usePathname();
    const urlId = pathname.split("/")[2].substring(0, 36);

    async function delContact() {
    
        await db.records.delete("contacts", urlId);
    
        router.refresh();
        router.back();
    }

    return (
        <form onSubmit={delContact}>
            <div className="field">
                <p className="control">
                    <button className="button is-danger" type="submit">Delete</button>
                </p>
            </div>
        </form>
    )
}
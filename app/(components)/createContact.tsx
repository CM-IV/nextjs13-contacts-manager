'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateContact() {
    const [name, setName] = useState<string>("");
    const [dob, setDob] = useState<string>("");
    const [workplace, setWorkplace] = useState<string>("");

    const router = useRouter();

    const makeContact = async () => {
        await fetch("http://localhost:8090/api/collections/contacts/records", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                dob,
                workplace
            }),
    
        });

        router.refresh();
    }

    return (
        <>
            <form onSubmit={makeContact}>
                <div className="field">
                    <label className="label">Name</label>
                    <div className="control">
                        <input 
                        onChange={(e) => setName(e.target.value)}
                        className="input" 
                        type="text" 
                        />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Date of Birth</label>
                    <div className="control">
                        <input 
                        onChange={(e) => setDob(e.target.value)}
                        className="input" 
                        type="text" 
                        />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Workplace</label>
                    <div className="control">
                        <input 
                        onChange={(e) => setWorkplace(e.target.value)}
                        className="input" 
                        type="text" 
                        />
                    </div>
                </div>
                <div className="field is-grouped">
                    <div className="control">
                        <button className="button is-link" type="submit">Submit</button>
                    </div>
                </div>
            </form>
        </>
    )

}
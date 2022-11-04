'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateContact() {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
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
                name: name,
                email: email,
                date_of_birth: dob,
                workplace: workplace
            }),
    
        });

        router.refresh();
    }

    return (
        <>
            <div className="card">
                <div className="card-content">
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
                            <label className="label">Email</label>
                            <div className="control">
                                <input 
                                onChange={(e) => setEmail(e.target.value)}
                                className="input" 
                                type="email" 
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
                        <div className="field">
                            <div className="control">
                                <button className="button is-link" type="submit">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )

}
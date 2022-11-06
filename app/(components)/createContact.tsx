'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import { db } from "../(db)/pbInit";


export default function CreateContact() {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [date_of_birth, setDob] = useState<string>("");
    const [workplace, setWorkplace] = useState<string>("");

    const router = useRouter();

    const makeContact = async () => {

        const bodyData = {
            name: name,
            email: email,
            date_of_birth: date_of_birth,
            workplace: workplace
        }

        await db.records.create("contacts", bodyData);

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
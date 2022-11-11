'use client';

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { db } from "../(db)/pbInit";

export default function UpdateContact({ data }: any) {

    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [date_of_birth, setDob] = useState<string>("");
    const [workplace, setWorkplace] = useState<string>("");

    const router = useRouter();

    const setContact = () => {
        setName(data.name);
        setEmail(data.email);
        setDob(data.date_of_birth);
        setWorkplace(data.workplace);
    }

    useEffect(() => {
        setContact();
    }, [])

    async function patchContact() {

        const bodyData = {
            name: name,
            email: email,
            date_of_birth: date_of_birth,
            workplace: workplace
        }

        try {
            await db.collection("contacts").update(data.id, bodyData);

            router.refresh();
            router.back();
        } catch (error) {
            console.log(error);
        }

    }

    return (
        <div className="card">
            <div className="card-content">
                <form onSubmit={patchContact}>
                    <div className="field">
                        <label className="label">Name</label>
                        <div className="control">
                            <input 
                            defaultValue={data.name}
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
                            defaultValue={data.email}
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
                            defaultValue={data.date_of_birth}
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
                            defaultValue={data.workplace}
                            onChange={(e) => setWorkplace(e.target.value)}
                            className="input" 
                            type="text" 
                            />
                        </div>
                    </div>
                    <div className="field">
                        <div className="control">
                            <button className="button is-link" type="submit">Update</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
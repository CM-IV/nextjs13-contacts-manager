import UpdateContact from "../../../(components)/updateContact"


async function getContact(contactId: string) {
    const res = await fetch(
        `http://localhost:8090/api/collections/contacts/records/${contactId}`, {
            cache: "no-store"
        }
    );
    const data = await res.json();
    return data;
}

export default async function EditContact({ params }: any) {
    const contact = await getContact(params.id);
    return (
        <>
            <section className="section">
                <h1 className="title">Edit Contact</h1>
            </section>
            <section className="section">
                <UpdateContact data={contact}/>
            </section>
        </>
    )
}
interface Contacts {
    id: string;
    name: string;
    date_of_birth: string;
    workplace: string;
}

async function getContact(contactId: string) {
    const res = await fetch(
        `http://localhost:8090/api/collections/contacts/records/${contactId}`,
        {
            next: { revalidate: 10 },
        }
    );
    const data = await res.json();
    return data;
}

export default async function ContactPage({ params }: any) {
    const contact = await getContact(params.id);

    return (
        <>
            <h1 className="title">{contact.name}'s Contact Page</h1>
            <p>{contact.id}</p>
            <p>{contact.workplace}</p>
        </>
    )

}
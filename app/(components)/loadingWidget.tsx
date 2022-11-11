import Image from 'next/image';


export default function LoadingWidget() {
    return (
        <Image src="/loading.svg" alt="Loading..." height={200} width={200}/>
    )
}
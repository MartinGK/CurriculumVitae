import TopNav from '../TopNav'

type Props = {
    itemSelected: string;
}

export default function DesktopTopNav({ itemSelected }: Props) {
    return (
        <>
            <TopNav itemSelected={itemSelected} />
            <div className="bg-card-1 z-1 absolute mt-14 hidden w-full bg-black px-5 pb-20 text-white md:flex md:h-[40rem] md:items-center md:rounded-b-md md:rounded-r-md md:px-0" />
        </>

    );
}
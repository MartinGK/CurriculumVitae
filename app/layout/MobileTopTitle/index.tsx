import Divider from '../../components/Divider';

type Props = {
    title: string;
}

export default function index({ title }: Props) {
    return (
        <div className="h-18 !fixed z-20 w-full bg-black pt-6 md:!hidden">
            <h1 className="pb-2 pl-8 text-3xl">{title}</h1>
            <Divider />
        </div>
    );
}
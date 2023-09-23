type Props = {
    id: string;
    name: string;
    placeholder: string;
    type?: 'text' | 'number' | 'email' | 'password'
    multiline?: boolean;
    label: string;
    rows?: number;
    className?: string;
}

export default function TextField({ id, name, label, placeholder, className, type = "text", multiline, rows, ...rest }: Props) {
    return (
        <label className="w-full">
            <input
                id={id}
                name={name}
                placeholder={placeholder}
                type={type}
                {...rest}
                className={`bg-transparent origin-[bottom_center] outline-none transition-shadow duration-[0.5s] shadow-[0px_-2px_0px_0px_rgba(0,0,0,1)_inset] ease-in focus:shadow-[0px_-2px_0px_0px_rgba(255,0,0,1)_inset] w-full ${className}`}
            >

            </input>
            <span className="hidden">{label}</span>
        </label>
    );
}
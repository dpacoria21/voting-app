
interface Props {
    label: string,
    name: string,
    type: string,
    placeholder?: string,
}

export default function InputForm({label, name, type, placeholder}: Props) {
    return (
        <div className='flex flex-col gap-1 my-4'>
            <label htmlFor={name} className="font-bold text-xl">{label}</label>
            <input className='w-full px-3 py-1 rounded-sm outline-0 border-2 focus:border-blue-500' id={name} type={type} name={name} placeholder={placeholder}/>
        </div>
    );
}

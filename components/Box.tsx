import {twMerge} from "tailwind-merge";

interface BoxProps {
    children: React.ReactNode; // children can hold an array of react elements, string, number or a boolean.
    className ?: string;
}

export const Box: React.FC<BoxProps> = ({children, className}) => {
    return (
        // here the classname at the end allows us to pass additional classNames as props if we want to
        <div className={twMerge("bg-neutral-900 rounded-lg h-fit w-full", className)}> 
            {children}
        </div>
    );
};
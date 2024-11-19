import { CircleAlert } from "lucide-react";

interface Props {
    labelName?: string;
    optionMap: any[];
    errors?: any;
    selectOptionProps: any;
    htmlFor?: string;
    optionName?: string;
}

const SelectOptionCustom: React.FC<Props> = ({
    labelName,
    optionMap,
    errors,
    selectOptionProps,
    htmlFor,
    optionName,
}: Props) => {
    return (
        <div className="flex flex-col gap-2 ">
            {labelName && (
                <label htmlFor={htmlFor} className="font-medium text-sm ">
                    {labelName}
                </label>
            )}

            <div className="flex items-center gap-4">
                <select
                    className="w-full text-sm border-zinc-400  rounded-md"
                    id={htmlFor}
                    {...selectOptionProps}
                >
                    {optionName && <option value="">- {optionName} -</option>}

                    {optionMap}
                </select>
            </div>
            {errors && (
                <p className="text-sm flex items-center gap-2 text-red-600  ">
                    <span>*{errors}</span>
                </p>
            )}
        </div>
    );
};

export default SelectOptionCustom;

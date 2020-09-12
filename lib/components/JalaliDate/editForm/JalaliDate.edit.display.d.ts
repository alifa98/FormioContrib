declare const _default: ({
    key: string;
    ignore: boolean;
    type?: undefined;
    label?: undefined;
    input?: undefined;
    tooltip?: undefined;
    dataSrc?: undefined;
    data?: undefined;
    defaultValue?: undefined;
    weight?: undefined;
} | {
    type: string;
    label: string;
    key: string;
    input: boolean;
    tooltip: string;
    dataSrc: string;
    data: {
        values: {
            label: string;
            value: string;
            datePickerFormat: string;
        }[];
    };
    defaultValue: string;
    weight: number;
    ignore?: undefined;
} | {
    type: string;
    label: string;
    key: string;
    tooltip: string;
    input: boolean;
    weight: number;
    ignore?: undefined;
    dataSrc?: undefined;
    data?: undefined;
    defaultValue?: undefined;
})[];
export default _default;

var dateFormats = [
    { label: 'یکشنبه ۱۶ شهریور ۹۹', value: 'ddd D MMMM YY' },
    { label: 'یکشنبه ۱۶ شهریور ۱۳۹۹', value: 'ddd D MMMM YYYY' },
    { label: '۱۶ شهریور ۹۹', value: 'D MMMM YY' },
    { label: 'یکشنبه ۱۶ شهریور', value: 'ddd D MMMM' },
    { label: '۱۳۹۹/۰۶/۱۶', value: 'YYYY/MM/DD' },
    { label: '۹۹/۰۶/۱۶', value: 'YY/MM/DD' },
    { label: '۱۳۹۹-۰۶-۱۶', value: 'YYYY-MM-DD' },
    { label: '۹۹-۰۶-۱۶', value: 'YY-MM-DD' }
];
export default [
    {
        key: 'labelPosition',
        ignore: true
    },
    {
        key: 'placeholder',
        ignore: true
    },
    {
        key: 'description',
        ignore: true
    },
    {
        key: 'hideLabel',
        ignore: true
    },
    {
        key: 'autofocus',
        ignore: true
    },
    {
        key: 'tooltip',
        ignore: true
    },
    {
        key: 'tabindex',
        ignore: true
    },
    {
        type: 'select',
        label: 'Input Date Format',
        key: 'inputDateFormat',
        input: true,
        tooltip: 'Enter showing format of persian input date.',
        dataSrc: 'values',
        data: {
            values: dateFormats
        },
        defaultValue: 'YY-MM-DD',
        weight: 1
    },
    {
        type: 'select',
        label: 'Output Date Format',
        key: 'outputDateFormat',
        input: true,
        tooltip: 'Enter format of output date.',
        dataSrc: 'values',
        data: {
            values: dateFormats
        },
        defaultValue: 'YY-MM-DD',
        weight: 2
    },
    {
        type: 'checkbox',
        label: 'Show time',
        key: 'hasTime',
        tooltip: 'Show time in input',
        input: true,
        weight: 3
    },
];

import editForm from './JalaliDate.form';
declare const JalaliDate_base: any;
export default class JalaliDate extends JalaliDate_base {
    constructor(component: any, options: any, data: any);
    static schema(): any;
    static editForm: typeof editForm;
    static builderInfo: {
        title: string;
        group: string;
        icon: string;
        weight: number;
        documentation: string;
        schema: any;
    };
    get classes(): String;
    get getInputName(): String;
    renderInput(): any;
    render(children: any): any;
    attach(element: any): any;
    clickEventHandler(): void;
}
export {};

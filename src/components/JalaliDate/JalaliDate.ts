import { Components } from 'formiojs';
const FieldComponent = (Components as any).components.field;
import editForm from './JalaliDate.form';


export default class JalaliDate extends (FieldComponent as any) {

  public dateValue: string;

  constructor(component, options, data) {
    super(component, options, data);
  }

  static schema() {
    return FieldComponent.schema({
      type: 'jalaliDate'
    });
  }

  public static editForm = editForm;

  static builderInfo = {
    title: 'Jalali Date',
    group: 'basic',
    icon: 'fa fa-calendar',
    weight: 70,
    documentation: 'https://github.com/alifa98/',
    schema: JalaliDate.schema()
  }

  get classes(): string {

    return " jalaliDate form-contro ";
  }

  get getInputName(): string {

    return `${this.component.key}`;
  }

  public render(children) {
    return super.render(this.renderTemplate('jalaliDate', {
      classes: this.classes,
      inputKeyName: this.getInputName,

    }));
  }


  attach(element) {
    const refs = {};
    refs[this.getInputName] = 'multiple';
    this.loadRefs(element, refs);

    console.log(element);

    console.log(this.refs[this.getInputName][0]);

    this.addEventListener(this.refs[this.getInputName][0], 'change', () => this.updateValue());

    return super.attach(element);
  }


  getValue() {
    console.log("Get Called");
    return this.dateValue;
    
  }

  setValue(value) {
    console.log("Set Called");
    if (!value) {
      return;
    }
    this.dateValue = value;
  }


}

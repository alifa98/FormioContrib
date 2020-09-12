import { Components } from 'formiojs';
const FieldComponent = (Components as any).components.field;
import editForm from './JalaliDate.form';
import dateFormats from './editForm/formatConfig'

export default class JalaliDate extends (FieldComponent as any) {

  constructor(component, options, data) {
    super(component, options, data);
  }

  static schema() {
    return FieldComponent.schema({
      type: 'jalaliDate',
      outputDateFormat: dateFormats[0].value, // Default value
      inputDateFormat: dateFormats[0].value, // Default value
      hasTime: false // Default value
    });
  }

  public static editForm = editForm;

  static builderInfo = {
    title: 'Jalali Date',
    group: 'basic',
    icon: 'calendar',
    weight: 70,
    documentation: 'https://github.com/alifa98/',
    schema: JalaliDate.schema()
  }

  get classes(): string {

    return " jalaliDate form-control ";
  }

  get getInputName(): string {

    return `${this.component.key}`;
  }

  public render(children) {

    return super.render(this.renderTemplate('jalaliDate', {
      classes: this.classes,
      inputKeyName: this.getInputName,
      showingFormat: dateFormats.find(formatSelectEntry => formatSelectEntry.value == this.component.inputDateFormat).datePickerFormat,
    }));
  }
}

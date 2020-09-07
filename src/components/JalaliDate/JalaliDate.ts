/**
 * This file shows how to create a custom component.
 *
 * Get the base component class by referencing Formio.Components.components map.
 */
import { Components } from 'formiojs';
const FieldComponent = (Components as any).components.field;
import editForm from './JalaliDate.form';


export default class JalaliDate extends (FieldComponent as any) {

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

    return " jalaliDate ossuinput ";
  }

  get getInputName(): string {

    return `${this.component.key}`;
  }

  public render(children) {
    return super.render(this.renderTemplate('checkmatrix', {
      classes: this.classes,
      inputKeyName: this.getInputName,

    }));
  }


  attach(element) {
    const refs = {};
    return super.attach(element);
  }
}

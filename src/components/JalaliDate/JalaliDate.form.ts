import nestedComponentForm from 'formiojs/components/_classes/nested/NestedComponent.form';
import JalaliDateEditDisplay from './editForm/JalaliDate.edit.display';
export default function(...extend) {
  return nestedComponentForm([
    {
      key: 'display',
      components: JalaliDateEditDisplay
    }
  ], ...extend);
}

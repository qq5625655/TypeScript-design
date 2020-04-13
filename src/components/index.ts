import Menu from './menu';
import Button from './button';
import Checkbox from './checkbox';
// console.log('yuButton', yuButton);
// 定义接口
interface components {
  [index: string]: any;
}

// const yuButton = Button.Button;
// const yuButtonGroup = Button.ButtonGroup;

const components: components = {
  yuMenu: Menu.Menu,
  yuMenuItem: Menu.MenuItem,
  yuButton: Button.Button,
  yuButtonGroup: Button.ButtonGroup,
  yuCheckbox: Checkbox.Checkbox,
  yuCheckboxGroup: Checkbox.CheckboxGroup
};

export default {
  install(Vue: any) {
    Object.keys(components).forEach((key: string) => {
      Vue.component(key, components[key]);
    });
  }
};

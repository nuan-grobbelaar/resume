import Button from '../components/Button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    type: {
      control: 'select',
      options: ['bar', 'line', 'scatter']
    },
    color: {
      control: 'color',
      default: '#000'
    }
  }
};


const Template = (args) => <Button {...args}/>

export const Primary = Template.bind({});
Primary.args = {
  children: 'Hello'
}
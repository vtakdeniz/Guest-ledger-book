import { mount } from '@vue/test-utils'
import Form from '@/components/Form.vue'

describe('Form.vue', () => {

  it('Can emit message object from form',()=>{
    let wrapper = mount(Form);

    let email_input = wrapper.find('input');
    let message_input = wrapper.find('textarea');

    email_input.setValue('my@mail.com')
    message_input.setValue('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua')

    let button = wrapper.find('button');
    button.trigger('click');

     expect(wrapper.emitted()).toHaveProperty('addItem')
     expect(wrapper.emitted().addItem).toEqual([[{
         email:'my@mail.com',
         content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
     }]])
  })
  
})

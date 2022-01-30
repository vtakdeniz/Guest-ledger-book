import { mount } from '@vue/test-utils'
import Record from '@/components/Record.vue'

describe('Record.vue', () => {
  let message={
    email:"pll@example.com",
    content:"test Records 3"
  }

  it('Can render a single message',()=>{
    let wrapper = mount(Record,{
      propsData:{
        message
      }
    });

    expect(wrapper.text()).toContain('pll@example.com');
    expect(wrapper.text()).toContain('test Records 3');
  })
  
})

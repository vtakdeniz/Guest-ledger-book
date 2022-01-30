import { mount } from '@vue/test-utils'
import Records from '@/components/Records.vue'
import Record from '@/components/Record.vue'

describe('Records.vue', () => {
  let messages
  beforeEach(()=>{
    messages=[
      {
          email:"abc@example.com",
          content:"test Records 1"
      },
      {
          email:"gfd@example.com",
          content:"test Records 2"
      },
      {
          email:"pll@example.com",
          content:"test Records 3"
      }
    ];
  });

  it('can render all records in props', () => {
    const wrapper = mount(Records,{
      propsData:{
        messages
      }
    })

    let record_comp=wrapper.findAllComponents(Record);

    expect(record_comp.length).toBe(3);
    expect(wrapper.text()).toContain('abc@example.com')
    expect(wrapper.text()).toContain('pll@example.com')
    expect(wrapper.text()).toContain('gfd@example.com')

    expect(wrapper.text()).toContain('test Records 1')
    expect(wrapper.text()).toContain('test Records 2')
    expect(wrapper.text()).toContain('test Records 3')
  })

  it('can emit clear all messages', async () => {
    const wrapper = mount(Records,{
      propsData:{
        messages
      },
    })
    wrapper.vm.$emit('clearAllRecords');
    await wrapper.vm.$nextTick() 
    expect(wrapper.emitted().clearAllRecords).toBeTruthy()
    expect(wrapper.emitted().clearAllRecords.length).toBe(1)
  })
  
})

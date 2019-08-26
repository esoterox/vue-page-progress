import { shallowMount } from '@vue/test-utils'
import PageProgress from '@/components/PageProgress.vue'

describe('PageProgress.vue', () => {
  test('that the correct modifier class is applied to the bar container based on the barPosition prop', () => {
    const wrapper = shallowMount(PageProgress, {
      propsData: { barPosition: 'left' }
    })
    expect(wrapper.find('div').classes()).toContain('page-progress__container--left')
  })
  test('that the progress meter colour is rgb(250, 250, 250)', () => {
    const wrapper = shallowMount(PageProgress, {
      propsData: { colour: '#fafafa' }
    })
    expect(wrapper.find('span').attributes().style).toContain('background-color: rgb(250, 250, 250);')
  })
})

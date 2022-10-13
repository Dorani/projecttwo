import CharacterGallery from '../components/CharacterGallery'
import { shallow } from 'enzyme'

const setup = () => shallow(<CharacterGallery />)

const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`)

it('CharacterGallery Component Renders Without Error', () => {
    const wrapper = setup()

    const charComponent = findByTestAttr(wrapper, "component-char-gallery")

    expect(charComponent.length).toBe(1)
})
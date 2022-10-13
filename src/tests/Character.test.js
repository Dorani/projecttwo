import Character from '../components/Character'
import { shallow } from 'enzyme'


const setup = (props) => shallow(<Character {...props} />)


const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`)

const samwiseGamgee = {
    "_id": "5cd99d4bde30eff6ebccfd0d",
    "height": "1.22m (4'0\")",
    "race": "Hobbit",
    "gender": "Male",
    "birth": "April 6 ,2980",
    "spouse": "Rosie Cotton",
    "death": "Still alive, after going to the ,Undying Lands, in ,FO 61",
    "realm": "",
    "hair": "Blond (movie)",
    "name": "Samwise Gamgee",
    "wikiUrl": "http://lotr.wikia.com//wiki/Samwise_Gamgee",
    "imgUrl": "https://www.frontporchrepublic.com/wp-content/uploads/2011/05/Samwise-Gamgee.jpg"
}

it('Character Component Renders Without Error', () => {
    const wrapper = setup()
    const charComponent = findByTestAttr(wrapper, "component-character")

    expect(charComponent.length).toBe(1)
})

describe('Character Component Content Structure', () => {
    const wrapper = setup()

    it("Renders a H1 for the Character's Name", () => {

        const nameHeader = findByTestAttr(wrapper, 'char-name')

        expect(nameHeader.length).toBe(1)
    })

    it("Renders a img for the Character", () => {

        const charImg = findByTestAttr(wrapper, 'char-img')

        expect(charImg.length).toBe(1)
    })

    it("Renders a list for the Character", () => {

        const charList = findByTestAttr(wrapper, 'char-list')

        expect(charList.length).toBe(1)
    })

    it("Renders a list item for the Character's DOB", () => {

        const charDob = findByTestAttr(wrapper, 'char-birth')

        expect(charDob.length).toBe(1)
    })

    it("Renders a list item for the Character's DOD", () => {

        const charDeath = findByTestAttr(wrapper, 'char-death')

        expect(charDeath.length).toBe(1)
    })

    it("Renders a list item for the Character's Race", () => {

        const charRace = findByTestAttr(wrapper, 'char-race')

        expect(charRace.length).toBe(1)
    })

    it("Renders a list item for the Character's Realm", () => {

        const charRealm = findByTestAttr(wrapper, 'char-realm')

        expect(charRealm.length).toBe(1)
    })

    it("Renders a list item for the Character's Spouse", () => {

        const charSpouse = findByTestAttr(wrapper, 'char-spouse')

        expect(charSpouse.length).toBe(1)
    })
})


describe('Character Component Renders Props', () => {
    const wrapper = setup(samwiseGamgee)

    it("Renders the Character's name", () => {
        const charName = findByTestAttr(wrapper, "char-name").text()

        expect(charName).toBe(samwiseGamgee.name)
    })

    it("Renders the Character's DOB", () => {
        const dateOfBirth = findByTestAttr(wrapper, "char-birth").text()

        expect(dateOfBirth).toBe(`Date of Birth: ${samwiseGamgee.birth}`)
    })

    it("Renders the Character's DOD", () => {
        const charDeath = findByTestAttr(wrapper, "char-death").text()

        expect(charDeath).toBe(`Date of Death: ${samwiseGamgee.death}`)
    })

    it("Renders the Character's Race", () => {
        const charRace = findByTestAttr(wrapper, "char-race").text()

        expect(charRace).toBe(`Race: ${samwiseGamgee.race}`)
    })

    it("Renders the Character's Race", () => {
        const charRealm = findByTestAttr(wrapper, "char-realm").text()

        expect(charRealm).toBe(`Realm: ${samwiseGamgee.realm}`)
    })

    it("Renders the Character's Spouse", () => {
        const charSpouse = findByTestAttr(wrapper, "char-spouse").text()

        expect(charSpouse).toBe(`Spouse: ${samwiseGamgee.spouse}`)
    })
})
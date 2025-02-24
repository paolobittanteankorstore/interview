import { mount } from '@vue/test-utils';
import HelloWorld from '../src/components/HelloWorld.vue';

describe('HelloWorld.vue', () => {
    it('renders props.msg when passed', () => {
        const msg = 'Welcome to Vue.js!';
        const wrapper = mount(HelloWorld, {
            props: { msg }
        });

        // Check if the message is rendered in the <h1> tag
        expect(wrapper.find('h1').text()).toBe(msg);
    });

    it('renders static content correctly', () => {
        const wrapper = mount(HelloWorld, {
            props: { msg: 'Test Message' }
        });

        // Check for static content like "Installed CLI Plugins"
        expect(wrapper.text()).toContain('Installed CLI Plugins');
        expect(wrapper.text()).toContain('Essential Links');
        expect(wrapper.text()).toContain('Ecosystem');

        // Check for specific links
        const links = wrapper.findAll('a');
        expect(links.length).toBeGreaterThan(0); // Ensure there are links
        expect(links[0].attributes('href')).toBe('https://cli.vuejs.org'); // Check first link
    });
});

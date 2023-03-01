
import Button from '../packages/button/index.js';
import locale from './locale';


const components = [Button];


const install = function (Vue, opts = {}) {
    locale.use(opts.locale);
    locale.i18n(opts.i18n);

    components.forEach(component => {
        Vue.component(component.name, component);
    });

    Vue.prototype.$ELEMENT = {
        size: opts.size || '',
        zIndex: opts.zIndex || 2000
    };

};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    version: '2.15.13',
    locale: locale.use,
    i18n: locale.i18n,
    install,
    Button,
}

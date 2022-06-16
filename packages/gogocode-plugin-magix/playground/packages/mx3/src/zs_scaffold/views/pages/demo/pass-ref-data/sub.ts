import Magix from 'magix';
import View from 'zs_scaffold/view';

export default View.extend({
    tmpl: '@sub.html',
    init(props) {
        this.updater.set(props)
    },
    render() {
        this.updater.digest({});
    },
});
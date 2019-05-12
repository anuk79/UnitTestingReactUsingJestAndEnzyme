import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

// Note: When using TypeScript with Babel, all your files need to have at least one export, 
// otherwise you will get the error 'Cannot compile namespaces when the '--isolatedModules' flag is provided..'
// To fix this, you can add export default undefined to src/setupTests.ts.
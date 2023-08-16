import { translate} from '../js/app.js';

test('basic test', () => {
    const code =  {666: 'FatalError'};

    let result = translate(code);
    expect(result).toBe('FatalError')

})
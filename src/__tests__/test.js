import { translate} from '../js/app.js';


const listError = new ErrorRepository()
this.map.set(400, 'Bad Request!');
this.map.set(403, 'Forbidden!');
this.map.set(404, 'Not Found!');


test('basic test', () => {
    const code = 400;

    let result = translate(code);
    expect(result).toBe(translate(code))

})


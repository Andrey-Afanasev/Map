
class ErrorRepository {

    constructor() {
        let map = new Map();
    
    }

    addError(code, message) {
        this.map.set(code, message);
    }


    
    translate(code) {

        if(map.has(code)) {
            return map.get(code)
        } else {
            throw new Error('Unknown error!')

        }

   }
    
}
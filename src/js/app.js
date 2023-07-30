
class ErrorRepository {

    constructor(errorСode, errorValue) {
        let map = new Map();
        this.errorСode = errorСode;
        this.errorValue = errorValue;

    }

    
    translate(code) {

        if(map.has(code)) {
            return map.get(code)
        } else {
            throw new Error('Unknown error!')

        }

    }
    
}
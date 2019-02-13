import axios from 'axios';
export default class Film{
    constructor(query){
        this.query = query;
    }

    async getResults(){
        try {
            //Create backend and use this.query
            const res = await axios(`http://localhost/javascript-daw/ajax-1/php/main.php?action=table&id=1`);
            console.log(res.data);
        } catch (e) {
            console.log(e);
        }
    }
}
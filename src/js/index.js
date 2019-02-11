import axios from 'axios';

async function getResults(){
    const res = await axios.get(`http://localhost/javascript-daw/ajax-1/php/main.php?action=table&id=1`);
    console.log(res.data);
}
getResults();


// Global app controller

const x = 2333;
console.log(`asd TEST asd, ${x} aaaaaaaaaaaaaaa`);
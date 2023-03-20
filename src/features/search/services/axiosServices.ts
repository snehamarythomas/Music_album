import axios from 'axios';

export async function getMusicData(inputText:any){
    const response = await axios.get('https://itunes.apple.com/search?term=' +inputText);

    return response;
}


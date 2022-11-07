import axios from 'axios';

export async function getNotRespondedList(status) {
   
        const result = await axios.get("http://localhost:8080/hiring/candidates/"+status,
        { headers:{
             token:"eyJhbGciOiJIUzUxMiJ9.eyJyb2xlIjoiQWRtaW4iLCJlbWFpbCI6Imp1bGluLmJlc3RpbmFAeWFob28uY29tIn0.ZqsYNYONsNcDVSkvLn0GGDCx5yCqUrubiaN8AHWogLolrehKVA-Xr3EzBeBefsRwWkjlOsc3dyRGi_dGbwKJSw"
            // token:localStorage.getItem('token')
         }},
);
return result;
}


export function getNotRespondedCount(status) {
   
        const result =  axios.get("http://localhost:8080/hiring/candidate/count/"+status,
        { headers:{
             token:"eyJhbGciOiJIUzUxMiJ9.eyJyb2xlIjoiQWRtaW4iLCJlbWFpbCI6Imp1bGluLmJlc3RpbmFAeWFob28uY29tIn0.ZqsYNYONsNcDVSkvLn0GGDCx5yCqUrubiaN8AHWogLolrehKVA-Xr3EzBeBefsRwWkjlOsc3dyRGi_dGbwKJSw"
            // token:localStorage.getItem('token')
         }},
);
return result;
}

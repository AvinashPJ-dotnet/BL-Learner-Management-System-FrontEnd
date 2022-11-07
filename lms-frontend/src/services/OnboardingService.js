
import axios from 'axios';

const token ='eyJhbGciOiJIUzUxMiJ9.eyJyb2xlIjoiYWRtaW4iLCJlbWFpbCI6ImF2aW5hc2gucHVqYXJpNDJAZ21haWwuY29tIn0.aQdsfLbOEfbCYUMdCoeVnn4pTSd2NeR9ZKigepnD0VNposcmvGShVBoftnPg83Ke7tzguo5WDAJrzcBUNJQdnQ'
export const fetchCandidatesByStatus=((status)=>{
    return axios.get(`http://localhost:8080/onboarding/candidates/status/`+status.tabStatus,{
        headers: {
          'token': token
        }
        });
});

export const fetchCandidatesCountByStatus=((status)=>{
    return axios.get(`http://localhost:8080/onboarding/countCandidatesByStatus/`+status.tabStatus,{
        headers: {
          'token': token
        }
        });
});
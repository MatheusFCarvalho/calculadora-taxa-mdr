import axios from "axios"

export const makeRequest = async (amount, installments, mdr) => {
    let url = 'https://frontend-challenge-7bu3nxh76a-uc.a.run.app'
    let data = { amount, installments, mdr }

    let response = await axios.post(url, data)
        .then(function (response) {
            console.log(response);
            return response.data
        })
        .catch(function (error) {
            console.log(error);
        });

    return response

}
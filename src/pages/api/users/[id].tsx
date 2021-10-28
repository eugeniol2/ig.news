import { NextApiRequest, NextApiResponse } from "next";


export default (request : NextApiRequest, response : NextApiResponse) => {
    console.log(request.query);
    const users = [
        {id: 1, name: 'Carlos'},
        {id: 2, name: 'josias'},
        {id: 3, name: 'jhef'}
    ]

    return response.json(users);
}
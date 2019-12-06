import React from 'react';

class UserUtils extends React.Component {

    static register = (name, password) => {
        const data = {
            name, password
        };

        fetch("http://localhost:3001/register",
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify(data)
            }).then((Response) => Response.json()).then((findresponse) => {
                console.log(findresponse);
            }
        )
    };

    static login = (name, password) => {
        const data = {
            name, password
        };

        fetch("http://localhost:3001/login",
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify(data)
            }).then((Response) => Response.json()).then((findresponse) => {
                console.log(findresponse);
            }
        )
    };
}

export default UserUtils;
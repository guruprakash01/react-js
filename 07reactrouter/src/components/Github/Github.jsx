import React from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    const data = useLoaderData()

    /*const [data, setData] = React.useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/guruprakash01')
            .then((response) => response.json())
            .then(data => {
                setData(data)
                console.log(data)
            })
    }, [])*/

    return (
        <div className='text-center m-4 bg-gray-400 text-white p-4 text-3xl'>Github followers: {data.followers}
            <img src={data.avatar_url} width={300} alt="guruphoto" />
        </div>
    )
}

export default Github

export const githubInfoLoder = async () => {
    const response = await fetch('https://api.github.com/users/guruprakash01')
    return response.json()
}
import React from 'react'
import {  useQuery } from 'react-query'
function Ghanaprimier() {
    // FETCH POST
const { DtaLoading, error, data } = useQuery('primier', () =>
fetch('https://apiv2.allsportsapi.com/football/?&met=Standings&leagueId=177&APIkey=440b167c986eab487e3028d27171407a7c70d02b129969321d4782245bba47fb').then(res =>
  res.json()

)
)
console.log(data,"ghana primier")
    return (
        <div className="Ghanaprimier">

        </div>
    )
}

export default Ghanaprimier

import React from 'react'
import {useGetCat} from "../useGetCat";

function CatFact() {
  const { data, error, isPending, refetchData } = useGetCat();
  return (
      <div className="catfact-example">
        { isPending ? "Loading..." :
        <>
          <p className="cat-fact">{data?.fact}</p>
          <button onClick={refetchData}>Get a New One</button>
        </>
        }
      </div>
  )
}

export default CatFact
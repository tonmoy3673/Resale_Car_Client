import { useEffect } from "react"

const useTitle=title=>{


    useEffect(()=>{
        document.title=`${title} | Car-Dealer`;
    },[title])
}

export default useTitle;
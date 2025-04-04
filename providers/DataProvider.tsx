import { createContext, Dispatch, FC, ReactNode, SetStateAction, useMemo, useState } from "react"


interface IContext{
    activeStories: string[] | null
    setActiveStories: Dispatch<SetStateAction<string[] | null>>

}

export const DataContext = createContext<IContext>({}as IContext)



export const DataProvider:FC<{children: ReactNode}> = ({children}) =>{
    const [activeStories, setActiveStories] =  useState<IContext['activeStories']>(null)

    const value = useMemo(()=>({
        activeStories,
        setActiveStories
    }),[activeStories])


    return <DataContext.Provider value={value}>
        {children}
    </DataContext.Provider>

}
import React, { useState } from "react"
import axios from "axios"
import { asyncUpFetch } from "../redux/search"
import { loadHot } from "../redux/axios"
import { useSelector, useDispatch } from "react-redux"

const temp = [
    {
        title : "1",
        article : "2",
    },
    {
        title : "2",
        article : "3",
    },
    {
        title : "4",
        article : "5",
    }
]

const tempArr = temp.map((v) =>{
    return(
        <>
            <div>{v.title}</div>
            <div>{v.article}</div>
        </>
   )
})

const Search = () => {
    const dispatch = useDispatch()
    const [text,setText] = React.useState("")

    const SearchArticle = () => {
        dispatch(asyncUpFetch(text))
    }   
    return (
        <>
            <input
                value = {text}
                onChange = {(e)=> {setText(e.target.value)}}
                placeholder='Search'
            />
            <button
                onClick= {SearchArticle}
            >
                검색
            </button>
            <button>
                Clips
            </button>
            {text}
        </>
    )
}

export default Search
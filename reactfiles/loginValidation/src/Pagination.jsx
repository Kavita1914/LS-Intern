// import { useState } from "react"

// const Pagination = (props) => {

//     const { total, limit, DataFromPagination } = props
//     const [previous, setPrevious] = useState(1)
//     const pageNumbers = []

//     // console.log("DataFromPagination", DataFromPagination);
//     // console.log("previous", previous);
//     // console.log("pageNumbers", pageNumbers);    

//     for ( let i = 1; i<=Math.round(total/limit) ; i++) {
//         pageNumbers.push(i)
//     }

//     const handleClick = (pageInput) => {
//         DataFromPagination(pageInput)
//         setPrevious(pageInput)      
//     }

//     const handlePrevious = () => {
//         if (previous > 1) {
//             setPrevious(prev => {
//                 const newPage = prev - 1
//                 DataFromPagination(newPage)
//                 return newPage
//             })
//         }
//     }

//     const handleNext = () => {
//         if (previous < pageNumbers.length) {
//             setPrevious(prev => {
//                 const newPage = prev + 1
//                 DataFromPagination(newPage)
//                 return newPage
//             })
//         }
//     }

//     return (
//         <div className='pagination'>
//             <button className="btnPrevNext" onClick={handlePrevious}>
//                 <strong>Previous</strong>
//             </button>
//             {pageNumbers.map((pageNumber) => (
//                 <button className="btnPrevNext" key={pageNumber} onClick={() => handleClick(pageNumber)}>
//                     <strong>{pageNumber}</strong>
//                 </button>
//             ))}
//             <button className="btnPrevNext" onClick={handleNext}>
//                 <strong>Next</strong>
//             </button>
//         </div>
//     )
// }

// export default Pagination;

import { useEffect, useState } from "react"

const Pagination = (props) => {

    const { total, limit, DataFromPagination } = props
    const [currentPage, setCurrentPage] = useState(1)
    const pageNumbers = []
    const [display, setDisplay] = useState([])

    // console.log("DataFromPagination", DataFromPagination);
    // console.log("currentPage", currentPage);
    // console.log("pageNumbers", pageNumbers);    
    console.log("display", display);

    for ( let i = 1; i<=Math.round(total/limit) ; i++) {
        pageNumbers.push(i)
    }
    
    useEffect(() => {
        let newDisplay = []
        for (let j = currentPage; j <= (currentPage + 4); j++) {
            if ( j <= pageNumbers.length) {
                newDisplay.push(j)
            }
        }
        setDisplay(newDisplay)
    },[currentPage])

    const handleClick = (pageInput) => {
        DataFromPagination(pageInput)
        setCurrentPage(pageInput)      
    }

    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage(prev => {
                const newPage = prev - 1
                DataFromPagination(newPage)
                return newPage
            })
        }
    }

    const handleNext = () => {
        if (currentPage < pageNumbers.length - 4) {
            setCurrentPage(prev => {
                const newPage = prev + 1
                DataFromPagination(newPage)
                return newPage
            })
        }
    }

    return (
        <div className='pagination'>
            <button className="btnPrevNext" onClick={handlePrevious}>
                <strong>Previous</strong>
            </button>
            {display.map((pageNumber) => (
                <button className="btnNumbers" key={Math.random()} onClick={() => handleClick(pageNumber)}>
                    <strong>{pageNumber}</strong>
                </button>
            ))}
            <button className="btnPrevNext" onClick={handleNext}>
                <strong>Next</strong>
            </button>
        </div>
    )
}

export default Pagination;

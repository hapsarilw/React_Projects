import React from 'react'

export default function Pagination({gotoNextPage, gotoPrevPage }) {
    return (
        <div>
            {/* if have prev page then load prev button */}
            { console.log(gotoPrevPage)}
            { gotoPrevPage && <button onClick={gotoPrevPage}>Previous</button>}
            { gotoNextPage && <button onClick={gotoNextPage}>Next</button>}
        </div>
    )
}

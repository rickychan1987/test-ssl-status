import React from 'react'
import { DataTable } from './data-table'
import {columns} from './columns'
import { sc_brand } from '@/sc'

interface Props {
    
}

const People = (props: Props) => {
    return (
        <div className="container py-10 mx-auto">
        <DataTable columns={columns} data={sc_brand}/>
        </div>
    )
}

export default People
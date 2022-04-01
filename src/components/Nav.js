import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { fetchCategories } from '../actions'
import history from '../history'
const Nav = (props) => {
    const { category, list1, fetchsList, fetchCategories } = props
    useEffect(() => {
        fetchCategories()
    }, [])
    const getList = (e) => {
        let index = e.currentTarget.options.selectedIndex
        let selectedId = e.currentTarget.options.item(index).id
        if(selectedId) {
            history.push(`/product/${selectedId}/${index}`)
        }else {
            history.push('/')
        }
    }
    return (
        <div className='nav-container'>
            <select onChange={e => getList(e)} defaultChecked={true}>
                <option disabled selected>Ürün Kategorileri</option>
                {category && category.map((obj, i) => {
                    return (<option key={i} id={obj.id}  value={obj.title}>{obj.title}</option>)
                })}
            </select>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        category: Object.values(state.categorys),
    }
}
export default connect(mapStateToProps, { fetchCategories })(Nav)

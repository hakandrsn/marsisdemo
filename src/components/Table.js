import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchsProduct, fetchProduct } from "../actions"

const Table = (props) => {
  const { id, index } = props.match.params
  const filteredProduct = props.product && props.product.filter(obj => obj.categoryId === id)

  useEffect(() => {
    props.fetchsProduct()
  }, [])
  if (!props.category || !props.product) return <div>Loading...</div>
  return (
    <React.Fragment>
      <h1 className='pro-title'>{props.category.title}</h1>
      <hr />
      <h2>Ürünler</h2>
      <div className='pro-table'>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Ürün</th>
              <th>{`Fiyat($)`}</th>
              <th>Adet</th>
              <th>İşlem</th>
            </tr>
          </thead>
          <tbody>
            {filteredProduct && filteredProduct.map((obj, i) => {
              return (<tr key={i}>
                <th>{i + 1}</th>
                <th>
                  {obj.ürün}
                </th>
                <th>{obj.fiyat}</th>
                <th> <input type="number" min={1} defaultValue="1" /> </th>
                <th><button>Ekle</button></th>
              </tr>)
            })}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  )
}
const mapStateToProps = (state, ownProps) => {
  return {
    product: Object.values(state.product),
    category: state.categorys[ownProps.match.params.id]
  }
}
export default connect(mapStateToProps, { fetchsProduct, fetchProduct })(Table)
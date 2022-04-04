import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { fetchsProduct, fetchProduct, deleteToCart, addToCart } from "../actions"

const Table = (props) => {
  const [count, setCount] = useState("1")
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
                <th> <input type="number" min={1} defaultValue="1" onChange={(e) => setCount(e.target.value)} /> </th>
                <th><button onClick={() => props.addToCart(obj, count)}>Ekle</button></th>
              </tr>)
            })}
          </tbody>
        </table>
        {props.carts.length > 0 &&
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Ürün</th>
                <th>{`Fiyat($)`}</th>
                <th>İşlem</th>
              </tr>
            </thead>
            <tbody>
              {props.carts && props.carts.map((obj, i) => {
                return (<tr key={i}>
                  <th>{i + 1}</th>
                  <th>
                    {obj.ürün}
                  </th>
                  <th>{`${obj.count*obj.fiyat}`}</th>
                  <th><button onClick={() => props.deleteToCart(obj.id)}>Çıkar</button></th>
                </tr>)
              })}
            </tbody>
          </table>}
      </div>
    </React.Fragment>
  )
}
const mapStateToProps = (state, ownProps) => {
  return {
    product: Object.values(state.product),
    category: state.categorys[ownProps.match.params.id],
    carts: Object.values(state.carts)
  }
}
export default connect(mapStateToProps, { fetchsProduct, fetchProduct, deleteToCart, addToCart })(Table)
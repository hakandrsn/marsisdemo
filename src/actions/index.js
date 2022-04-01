import { db } from "../firebase.config.js"
import { fireTypes, types } from "./types";
import { getDoc, doc, collection, getDocs } from "firebase/firestore";
const { products, categories } = fireTypes
const { FETCHS_PRODUCT, FETCHS_CATEGORY,FETCH_PRODUCT, FETCH_CAGETORY } = types;

export const fetchsProduct = () => async dispatch => {
  try {
    const res = await getDocs(collection(db, products))
    const response =res.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    dispatch({ type: FETCHS_PRODUCT, payload: response });
  } catch (error) {
      alert(error + "list")
  }
}
export const fetchProduct = (id) => async dispatch => {
try {
  const res = await getDoc(doc(db, products,id))
  const response =({ ...res.data(), id: res.id })
  dispatch({ type: FETCH_PRODUCT, payload: response });
} catch (error) {
    alert(error + "product")
}
}

export const fetchCategories = () => async dispatch => {
try {
    const res = await getDocs(collection(db, categories))
    const response = res.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    dispatch({ type: FETCHS_CATEGORY, payload: response })
} catch (error) {
    alert(error + "kategori")
}
}
export const fetchCategory = (id) => async dispatch => {
  try {
      const res = await getDoc(doc(db, categories,id))
      const response =({ ...res.data(), id: res.id })
      dispatch({ type: FETCH_CAGETORY, payload: response })
  } catch (error) {
      alert(error + "kategori")
  }
  }
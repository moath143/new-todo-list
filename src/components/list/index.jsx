import React from 'react'
import Item from '../../components/item'
import './style.css'

const index = (props) => {
    const getData = localStorage.getItem('data')
    const data = JSON.parse(getData)
    const dataList = data.items.map((item) => {
        return (
                <Item
                  checkedType={props.handleChecked}
                  title={item.title}
                  key={item.id}
                  id={item.id}
                  handleDelete={props.handleDelete}
                  checked={props.checked}
                />
              )})
  return <ul>{dataList}</ul>;
}

export default index
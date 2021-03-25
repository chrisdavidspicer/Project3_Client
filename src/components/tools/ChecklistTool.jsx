import { useState } from 'react'
import axios from 'axios'

export default function ChecklistTool(props) {

  const [item, setItem] = useState('')
  const [list, setList] = useState([])

  const handleSubmit = e => {
    e.preventDefault()
  }

  const handleChange = e => {
    setItem(e.target.value)
  }

  const handleDelete = (e) => {
    // figure out deleting from DB
    e.preventDefault()
  }


  // need to map over info to create checklist items
  const ListItem = props.list.map((item) => {
    return (
      <div>
        <form onSubmit={handleDelete}>
          <input type="checkbox" id={item}/>
          <label htmlFor={item}>{item}</label>
          <input type="submit"/>
        </form>
      </div>
    )
  })

  // Do we want to have an update button for checklist, or update as clicked?

  return (
      <div>
          <h1>Hello from ChecklistTool</h1>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Add Item"
                value={item}
                onChange={handleChange}
              />
              <input type="submit"/>
            </form>
            {ListItem}
      </div>
  )
}
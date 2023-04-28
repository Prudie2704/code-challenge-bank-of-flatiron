import { useState } from "react"

export function Form({onSubmission}) {
  const [formData, setFormData] = useState({
    date: "",
    description: "",
    category: "",
    amount: 0,
   
  })
  function handleChange(event) {
    setFormData({...formData, [event.target.name]: event.target.value})
  }

  function handleSubmit(event) {
    event.preventDefault()
    onSubmission(formData)
  }
  return (
    <form onChange={handleChange} onSubmit={handleSubmit}>
      <div>
        <label htmlFor="date">Date</label>
        <input value={formData.date} name="date" type="date" id="date"/>
        <input value={formData.description} name="description" type="text" placeholder="Description"/>
        <input value={formData.category} name="category" type="text" placeholder="Category" />
        <input value={formData.amount} name="amount" type="number"/>
      </div>
      <button>Add Transaction</button>
    </form>
  )
}
import React, { useState } from 'react'

function Form() {
  const [ formData, setFormData ] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isFriendly: true,
    employment: "",
    favColor: ""
  })

  console.log(formData);

  const handleChange = (event) => {
    const {name, value, type, checked} = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: type === 'checkbox' ? checked : value
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormData(formData)
  }

  return (
    <div className='form-container'>
      <form 
        className="form"
        onSubmit={handleSubmit}
      >
        <input 
          type='text'
          onChange={handleChange}
          name='firstName'
          placeholder='First Name'
          value={formData.firstName}
        />
        <input 
          type='text'
          onChange={handleChange}
          name='lastName'
          placeholder='Last Name'
          value={formData.lastName}
        />
        <input 
          type='email'
          onChange={handleChange}
          name='email'
          placeholder='Email'
          value={formData.email}
        />
        <textarea 
          onChange={handleChange}
          name='comments'
          placeholder='Add comments'
          value={formData.comments}
        />
        <input 
          type='checkbox' 
          id='isFriendly'
          checked={formData.isFriendly}
          onChange={handleChange}
          name='isFriendly'
        />
        <label htmlFor='isFriendly'>Are you friendly?</label>
        <br />
        <br />
      <fieldset>
        <legend>Current employment status</legend>

        <input 
          type='radio'
          id='unemployed'
          name='employment'
          value='unemployed'
          checked={formData.employment === "unemployed"}
          onChange={handleChange}
        />

        <label htmlFor='unemployed'>Unemployed</label>
        <br />

        <input 
          type='radio'
          id='part-time'
          name='employment'
          value='part-time'
          checked={formData.employment === "part-time"}
          onChange={handleChange}
        />
        <label htmlFor='part-time'>Part Time</label>
        <br />
        <input 
          type='radio'
          id='full-time'
          name='employment'
          value='full-time'
          checked={formData.employment === "full-time"}
          onChange={handleChange}
        />
        <label htmlFor='full-time'>Full Time</label>
        <br />

      </fieldset>
      <br />

      <label htmlFor='favColor'>What is your favorite color?</label>
      <br />
      <select 
        id='favColor'
        value={formData.favColor}
        onChange={handleChange}
        name='favColor'
      >
        <option value=''>--Choose--</option>
        <option value='red'>Red</option>
        <option value='orange'>Orange</option>
        <option value='yellow'>Yellow</option>
        <option value='green'>Green</option>
        <option value='blue'>Blue</option>
        <option value='indigo'>Indigo</option>
        <option value='violet'>Violet</option>
      </select>
      <br />
      <br />
      <button className='form--submit'>Submit</button>
      </form>
    </div>
  )
}

export default Form

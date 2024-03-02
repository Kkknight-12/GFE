import { useState } from 'react'

const ContactForm = () => {
  const [localFormData, setLocalFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setLocalFormData({ ...localFormData, [e.target.name]: e.target.value })
  }

  const SUBMIT_URL = 'https://www.greatfrontend.com/api/questions/contact-form'

  const submitForm = async (event: {
    preventDefault: () => void
    target: any
  }) => {
    event.preventDefault()

    const form = event.target
    console.log('form ', form)

    try {
      if (form.method.toLowerCase() !== 'post') {
        alert('Incorrect form method value')
        return
      }

      const formData = new FormData(form)
      const response = await fetch(SUBMIT_URL, {
        method: form.method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          message: formData.get('message'),
        }),
      })

      const text = await response.text()
      console.log('text ', text)
    } catch (_) {
      console.error('Error submitting form')
    }
  }

  return (
    <form
      onSubmit={submitForm}
      method="post"
      action="https://www.greatfrontend.com/api/questions/contact-form"
    >
      <label htmlFor="name">Name: </label>
      <input type="text" name="name" onChange={handleChange} />

      <label htmlFor="email">Email: </label>
      <input type="email" name="email" onChange={handleChange} />

      <label htmlFor="message">Message: </label>
      <textarea name="message" onChange={handleChange} />

      <button type="submit">Submit</button>
    </form>
  )
}
export default ContactForm
import { onFormSubmit } from "./helper"

export const CustomForm = () => {
  return (
    <form
      method="POST"
      action="https://www.greatfrontend.com/api/questions/contact-form"
      onSubmit={onFormSubmit}
    >
      <div>
        <label htmlFor="name-input">Name</label>
        <input id="name-input" name="name" type="text" />
      </div>
      <div>
        <label htmlFor="email-input">Email</label>
        <input id="email-input" name="email" type="email" />
      </div>
      <div>
        <label htmlFor="message-input">Message</label>
        <textarea id="message-input" name="message"></textarea>
      </div>
      <div>
        <button type="submit">Send</button>
      </div>
    </form>
  )
}

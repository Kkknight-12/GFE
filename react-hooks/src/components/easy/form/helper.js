const SUBMIT_URL = "https://www.greatfrontend.com/api/questions/contact-form"

export const onFormSubmit = async (event) => {
  event.preventDefault()
  const form = event.target
  console.log("form ", form)

  try {
    if (form.action !== SUBMIT_URL) {
      console.log("Incorrect form action value")
      return
    }

    if (form.method.toLowerCase() !== "post") {
      console.log("Incorrect form method value")
    }

    const formData = new FormData(form)
    console.log("formData ", formData)
    console.log('formData.get("name") ', formData.get("name"))

    const response = await fetch(SUBMIT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
      }),
    })
    const text = await response.text()
    console.log("text ", text)
  } catch (error) {
    console.error(error)
  }
}

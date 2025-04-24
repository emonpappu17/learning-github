import { useState } from "react"

function App() {
  const [title, seTitle] = useState("");
  const [body, setBody] = useState("");


  const onSubmit = (e) => {
    e.preventDefault()

    const formData = {
      title,
      body
    }
    console.log(formData);
  }
  return (
    <>
      <p>react practice</p>
      <p>check check</p>
      {/* <input className="border" type="text" onChange={(e) => seTitle(e.target.value)} /> */}
      <form action="" onSubmit={onSubmit}>
        <label htmlFor="title">Title:</label>
        <input id="title" className="border" type="text" onChange={(e) => seTitle(e.target.value)} />
        <label htmlFor="body">Body:</label>
        <input id="body" className="border" type="text" onChange={(e) => setBody(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default App

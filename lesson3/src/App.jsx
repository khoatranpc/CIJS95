import { useState } from "react";
import Input from "./Input";

function App() {
  const [fullName, setFullName] = useState("MindX CIJS95");

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  }
  const handleChange = (e) => {
    setFullName(e.target.value);
  }
  return (
    <div className="app">
      <h1>Hello lớp!</h1>
      <form onSubmit={handleSubmit}>
        <Input fullName={fullName} handleChange={handleChange} />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App;

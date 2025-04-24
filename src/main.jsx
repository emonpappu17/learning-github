import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

// const element = (
//   <div>
//     {new Date().toLocaleTimeString()}
//   </div>
// )


// const element = React.createElement("h1", null, "testing testing kortasi")
// createRoot(document.getElementById('root')).render(element)

// setInterval(() => {

//   const element =
//     <div>
//       <h1>
//         {new Date().toLocaleTimeString()}
//       </h1>
//     </div>

//   createRoot(document.getElementById('root')).render(element)

// }, 1000)

class Hi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString(this.props.local)
    }
  }
  componentDidMount() {
    this.timer = setInterval(() => this.setState({
      date: new Date()
    }), 1000)
  }
  render() {
    return (
      <h1>
        {new Date().toLocaleTimeString(this.props.local)}
      </h1>
    )
  }
}

createRoot(document.getElementById('root')).render(<Hi local="bn-BD"></Hi>)

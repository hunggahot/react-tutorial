import React from 'react' // nạp thư viện react
import ReactDOM from 'react-dom/client' // nạp thư viện react-dom

// Tạo component App
function App() {
    return (
        <div>
            <h1>Xin chào anh em LamHungw!</h1>
            <h2>Hi May ae!</h2>
        </div>
    )
}

// Render component App vào #root element

// React@17
// ReactDOM.render(<App />, document.getElementById('root'))

// React@18

const root = ReactDOM(document.getElementById('root'))
root.render(<App />)
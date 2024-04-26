import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AssignMent from './AssignMent';
// function App() {
//   const [count, setCount] = useState(0);
//   const maxCount = 100; // Maximum count value, adjust as needed

//   const [data, setData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     address: ""
//   });

//   const handleInput = (e) => {
//     const { id, value } = e.target;

//     setData({
//       ...data,
//       [id]: value
//     });
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (data.name !== "" && data.email !== "" && data.address !== "" && data.phone !== "") {
//       alert("Data Submit Successfully..");
//     } else {
//       alert("Please write Something");
//     }
//   }

 
//     const [editorContent, setEditorContent] = useState('');
//     const [isContentSaved, setIsContentSaved] = useState(true);
  
//     // Load previously saved content from localStorage on component mount
//     useEffect(() => {
//       const savedContent = localStorage.getItem('editorContent');
//       if (savedContent) {
//         setEditorContent(savedContent);
//       }
//     }, []);
  
//     // Function to handle bold button click
//     const handleBoldClick = () => {
//       document.execCommand('bold', false, null);
//     };
  
//     // Function to handle italic button click
//     const handleItalicClick = () => {
//       document.execCommand('italic', false, null);
//     };
  
//     // Function to handle underline button click
//     const handleUnderlineClick = () => {
//       document.execCommand('underline', false, null);
//     };
  
//     // Function to handle list button click
//     const handleListClick = () => {
//       document.execCommand('insertUnorderedList', false, null);
//     };
  
//     // Function to handle save button click
//     const handleSaveClick = () => {
//       localStorage.setItem('editorContent', editorContent);
//       alert('Editor content saved successfully!');
//     };
  
//     const handleKeyDown = (e) => {
//       if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
//         e.preventDefault();
//       }
//     };

//     const handleReverse = () => {
//       setEditorContent(editorContent.split('').reverse().join(''));
//     };

//     useEffect(() => {
//       const handleBeforeUnload = (event) => {
//         if (!isContentSaved) {
//           event.preventDefault();
//           event.returnValue = '';
//         }
//       };
  
//       window.addEventListener('beforeunload', handleBeforeUnload);
  
//       return () => {
//         window.removeEventListener('beforeunload', handleBeforeUnload);
//       };
//     }, [isContentSaved]);
  
//   return (
//     <div className="container-fluid border">
//       <div className='row'>
//       <div className='col-sm-6'>
//         <div className="container mt-5 p-5 w-100" style={{ justifyContent: "center", alignItems: "center", textAlign: "center" }}>
//           <div className="col-sm-12 col-12 border p-2" >
//             <h1>Counter Count</h1>
//             <p>{count}</p>
//             <button onClick={() => setCount(count + 1)} className='btn btn-primary m-2'>Increase</button>
//             <button onClick={() => setCount(0)} className='btn btn-danger m-2'>Reset</button>
//             <button onClick={() => setCount(count - 1)} className='btn btn-secondary'>Decrease</button>
//           </div>
//           {/* Range input with fixed max value and current count as value */}
//           <input type="range" id="vol" name="vol" min="0" max={maxCount} value={count} onChange={() => {}} style={{width:"100%",padding:"5px"}}/>
//         </div>
//         </div>
//         <div className='col-sm-6'>
//         <div className='container border mt-4 p-4 w-50 col-12'>
//           <h1 style={{ textAlign: "center" }}>User Form</h1>
//           <div className='column col-12 m-2'>
//             <form onSubmit={handleSubmit}>
//               <div className='col-12'>
//                 <label htmlFor="name">Name:</label>
//                 <input type='text' id='name' placeholder='Enter your name..' value={data.name} onChange={handleInput} />
//                 <label htmlFor="email">Email:</label>
//                 <input type='email' id="email" placeholder='Enter your email' value={data.email} onChange={handleInput} />
//                 <label htmlFor="phone">Phone:</label>
//                 <input type='number' id="phone" placeholder='Enter your mobilenumber' value={data.phone} onChange={handleInput}/>
//                 <label htmlFor="address">Address:</label>
//                 <input type="text" id="address" placeholder='Enter Your address' value={data.address} onChange={handleInput} />
//                 <button type='submit' className='btn btn-success w-75 m-2'>Submit</button>
//               </div>
//             </form>
//           </div>
//         </div>
//         </div>
//         <div className='col-sm-6'>
//         <div className='container'>
//       <div
//         id="editor"
//         contentEditable="true"
//         style={{
//           border: '1px solid #ccc',
//           minHeight: '200px',
//           padding: '10px',
//           marginBottom: '10px',
//           direction:'ltr',
//         }}
//         onInput={(e) => {setEditorContent(e.target.innerHTML)
//           setIsContentSaved(false);}
//         }
//          onKeyDown={handleKeyDown}
//         dangerouslySetInnerHTML={{ __html: editorContent }}
//       ></div>
//       <button onClick={handleBoldClick} className='btn btn-primary p-2 m-2'>Bold</button>
//       <button onClick={handleItalicClick} className='btn btn-primary p-2 m-2'>Italic</button>
//       <button onClick={handleUnderlineClick} className='btn btn-primary p-2 m-2'>Underline</button>
//       <button onClick={handleListClick} className='btn btn-primary p-2 m-2'>Add List</button>
//       <button onClick={handleReverse} className='btn btn-primary p-2 m-2'>Reverse Content</button>
//       <button onClick={handleSaveClick}className='btn btn-success p-2 m-2'>Save</button>
//     </div>
 
//         </div>
//       </div>
//     </div>
//   );
// }
 function App(){
   return (
    <Router>
      <Routes>
      <Route path="/" element={<AssignMent/>}/>
      </Routes>
    </Router>
   )
 }
export default App;

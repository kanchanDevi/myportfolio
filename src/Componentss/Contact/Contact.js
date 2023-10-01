// import "./index.css";
// import { useState } from "react";
// import About from '../About/About'

// function Contact() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [mobileNumber, setMobileNumber] = useState("");
//   const [bio, setBio] = useState("");

//   const [message, setMessage] = useState("");

//   let handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       let res = await fetch("https://httpbin.org/post", {
//         method: "POST",
//         body: JSON.stringify({
//           name: name,
//           email: email,
//           mobileNumber: mobileNumber,
//           bio: bio,

//         }),
//       });
//       let resJson = await res.json();
//       if (res.status === 200) {
//         setName("");
//         setEmail("");
//         setMessage("User created successfully");
//       } else {
//         setMessage("Some error occured");
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <div className="App">
//         <About/>
//       <form onSubmit={handleSubmit} className="form-container">
//         <div className="form1">
//             <h1 className="project-heading">Projects</h1>
//         <label for="text" className="label">Name</label>
//         <input
//           type="text"
//           value={name}
//          className="name-input"
//           onChange={(e) => setName(e.target.value)}
//         />
//         </div>
//         <div className="form1">
//          <label for="text" className="label">Email</label>
//         <input
//           type="text"
//           value={email}
//           className="name-input"
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         </div>
//         <div className="form1">
//          <label for="text" className="label">Mobile</label>
//         <input
//           type="text"
//           value={mobileNumber}
//          className="name-input"
//           onChange={(e) => setMobileNumber(e.target.value)}
//         />
//         </div>
//         <div className="form1">
//          <label for="text" className="label">Message</label>
// <textarea
//           type="text"
//           value={bio}
//          rows="4" cols="50" className="name-input-area"
//           onChange={(e) => setBio(e.target.value)}
//         ></textarea>
//         </div>

//         <button type="submit" className="submit-button">Send</button>

//         <div className="message">{message ? <p>{message}</p> : null}</div>
//       </form>
//     </div>
//   );
// }

// export default Contact;
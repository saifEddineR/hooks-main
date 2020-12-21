import React from "react";
import { useState } from "react";
import { Button, Modal, Col, Row, Container } from "react-bootstrap";
import { FiPlusCircle } from "react-icons/fi";

const AddMovie = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  const handleShow = () => {
    setShow(true);
  };
  const [addMovie, setAddMovie] = useState(() => {
    return {
      title: "",
      auther: "",
      img: "",
      rating: "",
    };
  });
  const handleChange = (e) => {
    setAddMovie({ ...addMovie, [e.target.name]: e.target.value });
  };

  const add = () => {
    props.Updatemovie(addMovie);
    setShow(false);
  };
  return (
    <>
      <FiPlusCircle className="plus" variant="primary" onClick={handleShow} />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>ADD Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="form-control">
              <label htmlFor="title">Title : </label>
              <input type="text" name="title" onChange={handleChange} />
            </div>

            <div className="form-control">
              <label htmlFor="auther">Auther : </label>
              <input type="text" name="auther" onChange={handleChange} />
            </div>
            <div className="form-control">
              <label htmlFor="img">img : </label>
              <input type="text" name="img" onChange={handleChange} />
            </div>
            <div className="form-control">
              <label htmlFor="rate">Rate : </label>
              <input type="number" name="rating" onChange={handleChange} />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={add}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default AddMovie;

// const AddMovie = ({ addMovie }) => {
//   const [show, setShow] = useState(false);

//   const handleClose = () => {
//     setShow(false);
//     console.log(title, auther, img, rating);
//   };

//   const handleShow = () => {
//     setShow(true);
//   }
//   const [title, setTitle] = useState("");
//   const [auther, setAuther] = useState("");
//   const [img, setImg] = useState("");
//   const [rating, setRating] = useState("");

//   return (
//     <>
//       <FiPlusCircle className="plus" variant="primary" onClick={handleShow} />

//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>ADD Movie</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>

//           <div className="form-control">
//             <label htmlFor="title">Title : </label>
//             <input
//               type="text"
//               id="title"
//               name="title"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//             />
//           </div>

//           <div className="form-control">
//             <label htmlFor="auther">Auther : </label>
//             <input
//               type="text"
//               id="auther"
//               name="auther"
//               value={auther}
//               onChange={(e) => setAuther(e.target.value)}
//             />
//           </div>
//           <div className="form-control">
//             <label htmlFor="img">img : </label>
//             <input
//               type="text"
//               id="img"
//               name="img"
//               value={img}
//               onChange={(e) => setImg(e.target.value)}
//             />
//           </div>
//           <div className="form-control">
//             <label htmlFor="rate">Rate : </label>
//             <input
//               type="number"
//               id="rate"
//               name="rate"
//               value={rating}
//               onChange={(e) => setRating(e.target.value)}
//             />
//           </div>

//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// };
// export default AddMovie;

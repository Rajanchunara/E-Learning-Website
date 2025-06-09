import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Edit() {
    const navigate = useNavigate()
  const location = useLocation();
  const { description, image, name, price, _id } = location.state?.item || {};
  const [editName, setName] = useState(name);
  const [editDescription, setDescription] = useState(description);
  const [editPrice, setPrice] = useState(price);
  const [editImage, setImage] = useState(image);


  // const updateCourse = async (e) => {
  //   e.preventDefault();
  //   const formData = new FormData();
  //   formData.append("name", editName);
  //   formData.append("description", editDescription);
  //   formData.append("price", editPrice);
  //   if (editImage) formData.append("image", editImage);
  //   let response = await fetch(
  //     `http://localhost:9000/api/course/updateCourse/${_id}`,
  //     {
  //       method: "PUT",
  //       body: formData,
  //     }
  //   );

  //   console.log(response);
  //    navigate("/admin");
  //   if (!response.ok) {
  //     alert("Some things goes wrong");
  //     return;
  //   }
  //   response = await response.json();
  //   console.log(response);
  //   setName("");
  //   setImage(null);
  //   setPrice("");
  //   setDescription("");
  // };

const updateCourse = async (e) => {
  e.preventDefault();

  const formData = new FormData();
  formData.append("name", editName);
  formData.append("description", editDescription);
  formData.append("price", editPrice);
  if (editImage) formData.append("image", editImage);

  try {
    const response = await fetch(
      `http://localhost:9000/api/course/updateCourse/${_id}`,
      {
        method: "PUT",
        body: formData,
      }
    );

    // Log the raw response and parsed error if it failed
    if (!response.ok) {
      const errorText = await response.text(); // parse error payload
      console.error("Server error response:", errorText);
      alert("Something went wrong: " + errorText);
      return;
    }

    const data = await response.json();
    console.log("Update successful:", data);
    navigate("/admin");
    setName("");
    setImage(null);
    setPrice("");
    setDescription("");
  } catch (err) {
    console.error("Fetch error:", err);
    alert("Failed to update course: " + err.message);
  }
};



  return (
    <div>
      <form
        onSubmit={updateCourse}
        className="border-2   w-96 m-auto p-5 mt-10"
      >
        <img
          className="h-20"
          src={`http://localhost:9000/image/${image}`}
          alt="current"
        />
        <label htmlFor="name">Name</label>
        <br />
        <input
          value={editName}
          onChange={(e) => {
            setName(e.target.value);
          }}
          type="text"
          placeholder="Enter Course Name"
          className="w-full px-4 py-2 border rounded-md text-sm"
        />
        <br />
        <label htmlFor="description ">Description</label>
        <br />
        <input
          value={editDescription}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          type="text"
          placeholder="Enter Course description"
          className="w-full px-4 py-2 border rounded-md text-sm"
        />
        <br />
        <label htmlFor="price">Price</label>
        <br />
        <input
          value={editPrice}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
          type="number"
          placeholder="Enter course Price"
          className="w-full px-4 py-2 border rounded-md text-sm"
        />
        <br />
        <label htmlFor="image">Image</label>
        <br />
        <input
          onChange={(e) => setImage(e.target.files[0])}
          type="file"
          accept="image/*"
          className="px-4 py-2 border rounded-md text-sm"
        />
        <br />
        
        <button type="submit" className="bg-green-500 p-2 mt-2">
          Update
        </button>
      </form>
    </div>
  );
}

export default Edit;

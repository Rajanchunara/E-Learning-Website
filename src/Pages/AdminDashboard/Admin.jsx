import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function Admin() {
  const [courseList, setCourseList] = useState([]);
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();
  const [image, setImage] = useState();

  const navigate = useNavigate();

  const deleteCourse = async (id) => {
    let response = await fetch(
      `http://localhost:9000/api/course/deleteCourse/${id}`,
      {
        method: "DELETE",
      }
    );
    response = await response.json();
    console.log(response);
    alert("Course is deleted");
    getCourse();
  };

  const createCourse = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("image", image);
    let response = await fetch(
      "http://localhost:9000/api/course/createCourse",
      {
        method: "POST",
        body: formData,
      }
    );

    console.log(response);
    if (!response.ok) {
      alert("Some things goes wrong ");
      return;
    }
    response = await response.json();
    console.log(response);
    getCourse();
  };

  const getCourse = async () => {
    try {
      let response = await fetch("http://localhost:9000/api/course/getCourse", {
        method: "GET",
      });
      response = await response.json();
      console.log("Courses API Response:", response);
      setCourseList(response.course || []);
    } catch (error) {
      console.error("Error fetching courses:", error);
      setCourseList([]);
    }
  };

  useEffect(() => {
    getCourse();
  }, []);
  return (
    <div>
      <div>
        <form onSubmit={createCourse} className="border-2">
          <label htmlFor="name">Name</label>
          <br />
          <input
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
            placeholder="Enter Course Name"
          />

          <br />

          <label htmlFor="description ">Description</label>
          <br />

          <input
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            type="text"
            placeholder="Enter Course description"
          />
          <br />

          <label htmlFor="price">Price</label>
          <br />

          <input
            onChange={(e) => {
              setPrice(e.target.value);
            }}
            type="number"
            placeholder="Enter course Price"
          />
          <br />

          <label htmlFor="image">Image</label>
          <br />
          <input
            onChange={(e) => {
              setImage(e.target.files[0]);
            }}
            type="file"
          />
          <br />
          <br />

          <button type="submit">Submit</button>
        </form>
      </div>

      <div>
        {courseList.length > 0 ? (
          <div className="   flex  flex-wrap ">
            {courseList.map((item) => {
              return (
                <div
                  key={item._id}
                  className="h-72 w-72 p-5 m-3 shadow-2xl  flex  flex-col  items-center   shadow-gray-600    "
                >
                  <img
                    className="h-40"
                    src={`http://localhost:9000/image/${item.image}`}
                    alt=""
                  />
                  <h1>{item.name}</h1>
                  <h1>{item.price}</h1>

                  <div>
                    <button
                      onClick={() => {
                        navigate("/edit", {
                          state: {
                            item,
                          },
                        });
                      }}
                      className="bg-orange-500  p-2 w-20"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => {
                        deleteCourse(item._id);
                      }}
                      className="bg-red-500  ml-2 p-2 w-20"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div>loading...</div>
        )}
      </div>
    </div>
  );
}

export default Admin;

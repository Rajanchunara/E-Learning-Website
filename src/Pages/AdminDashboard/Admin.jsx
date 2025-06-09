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
      <div className="m-[10px] w-[700px] h-[350px] ">
        <form onSubmit={createCourse} className="border-2 p-3 space-y-2">
          <label htmlFor="name">Name</label>
          <br />
          <input
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
            onChange={(e) => {
              setImage(e.target.files[0]);
            }}
            type="file"
            className=" px-4 py-2 border rounded-md text-sm"
          />
          <br />
          <br />

          <button type="submit" className="border-1 p-2 rounded-2xl">
            Submit
          </button>
        </form>
      </div>

      {/* <div className="mt-[50px]">
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
      </div> */}

      <div className="mt-12 p-4">
        {courseList.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300 text-left">
              <thead className="bg-gray-200">
                <tr>
                  <th className="px-4 py-2 border">S.N.</th>
                  <th className="px-4 py-2 border">Course Name</th>
                  <th className="px-4 py-2 border">Price</th>
                  <th className="px-4 py-2 border">Description</th>
                  <th className="px-4 py-2 border">Image</th>
                  <th className="px-4 py-2 border">Action</th>
                </tr>
              </thead>
              <tbody>
                {courseList.map((item, index) => (
                  <tr key={item._id} className="hover:bg-gray-50">
                    <td className="px-4 py-2 border">{index + 1}</td>
                    <td className="px-4 py-2 border">{item.name}</td>
                    <td className="px-4 py-2 border">Rs.{item.price}</td>
                    <td className="px-4 py-2 border">
                      {item.description.length > 20
                        ? item.description.slice(0, 30) + "..."
                        : item.description}
                    </td>

                    <td className="px-4 py-2 border">
                      <img
                        src={`http://localhost:9000/image/${item.image}`}
                        alt={item.name}
                        className="h-16 w-16 object-cover"
                      />
                    </td>
                    <td className="px-4 py-2 border">
                      <button
                        onClick={() =>
                          navigate("/edit", {
                            state: { item },
                          })
                        }
                        className="bg-orange-500 text-white px-3 py-1 rounded mr-2"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => deleteCourse(item._id)}
                        className="bg-red-500 text-white px-3 py-1 rounded"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center mt-10 text-lg font-semibold">
            Loading...
          </div>
        )}
      </div>
    </div>
  );
}

export default Admin;

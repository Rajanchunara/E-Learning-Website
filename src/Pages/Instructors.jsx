import React from "react";
import Footer from "../Footer/Footer";
import { NavLink, useNavigate } from "react-router-dom";
import image2 from "../assets/Instructor/image copy.png";
import image3 from "../assets/Instructor/image copy 2.png";
import image4 from "../assets/Instructor/image copy 3.png";
import image5 from "../assets/Instructor/image copy 4.png";
import image6 from "../assets/Instructor/image copy 5.png";

const instructorsData = [
  {
    id: 1,
    name: "NANCY WHITE",
    course: "UI/UX Design, Graphic Design, Digital Marketing",
    image: image6,
    description:
      "I am a professional UI/UX Designer, Graphic Designer, and instructor dedicated to helping you master design principles and create impactful digital experiences.",
    experience: 5,
    projectsCompleted: 4,
    students: 20,
    about:
      "As a professional UI/UX Designer, Graphic Designer, and instructor on our e-learning platform, I bring years of experience in creating user-friendly and visually appealing designs. My courses are designed to help you master design principles, tools, and techniques, empowering you to craft exceptional digital experiences. Join me to turn your creativity into impactful designs",
  },
  {
    id: 2,
    name: "HENRY SMITH",
    course: "Data Science, MERN Stack",
    image: image2,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error, atque! Corporis accusamus porro sed soluta veritatis veniam ipsam ratione laudantium.",
    experience: 5,
    projectsCompleted: 4,
    students: 20,
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis aliquam placeat excepturi deserunt laborum ullam magni, accusamus modi consequuntur hic, perferendis possimus maiores voluptates. Numquam laudantium libero quod eius fugit in quasi eaque amet. Perspiciatis, placeat dolor! Minima, nostrum non.",
  },
  {
    id: 3,
    name: "CHARLOTTE",
    course: "COURSE: Web Development, Brand Management",
    image: image3,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error, atque! Corporis accusamus porro sed soluta veritatis veniam ipsam ratione laudantium.",
    experience: 5,
    projectsCompleted: 4,
    students: 20,
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quos officiis, nesciunt voluptatibus incidunt tempora distinctio recusandae dolor. Tenetur odit cupiditate suscipit, officiis repellat blanditiis accusantium asperiores necessitatibus sequi, perspiciatis voluptatum maxime vitae reiciendis aspernatur ducimus perferendis. Ut, iste odio.",
  },
  {
    id: 4,
    name: "JORDAN",
    course: "Project Management, Public Speaking & Presentation Skills",
    image: image4,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error, atque! Corporis accusamus porro sed soluta veritatis veniam ipsam ratione laudantium.",
    experience: 5,
    projectsCompleted: 4,
    students: 20,
    about:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores esse aspernatur pariatur quaerat quas. Magni dignissimos ea atque, at nobis reprehenderit. Laborum quibusdam, sapiente rem quod maxime neque? Esse nihil, placeat laudantium commodi in explicabo autem expedita cumque earum recusandae!",
  },
  {
    id: 5,
    name: "ETHAN",
    course: "Business Analytics, 3D Modeling and Animation",
    image: image5,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error, atque! Corporis accusamus porro sed soluta veritatis veniam ipsam ratione laudantium.",
    experience: 5,
    projectsCompleted: 4,
    students: 20,
    about:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque nemo dolorum reprehenderit temporibus cum accusamus autem aut aperiam numquam incidunt quaerat consequuntur ad reiciendis maxime dicta doloribus ab fugiat, nostrum distinctio. Velit itaque ut qui? Facilis quod doloremque maiores? Ipsam.",
  },
];

function Instructors() {
  const navigate = useNavigate();
  const viewProfile = (instructor) => {
    navigate(`/instructor/${instructor.id}`, { state: instructor });
  };

  return (
    <div>
      <div className="h-[1100px] bg-gray-200">
        <h1 className="text-[27px] font-bold pt-[50px] ml-[70px]">
          Instructors
        </h1>
        <div>
          {instructorsData.map((teacher) => {
            return (
              <div
                key={teacher.id}
                className="bg-white flex items-center justify-between h-[150px] w-[1000px] m-8 ml-[70px] pl-[30px] pr-[30px] rounded-[5px] shadow-2xl shadow-gray-500 "
              >
                <div className="flex gap-8">
                  <img
                    src={teacher.image}
                    alt=""
                    className="w-[90px] h-[90px] rounded-[50px]"
                  />
                  <div className="space-y-2 font-medium">
                    <h1>{teacher.name}</h1>
                    <h2>
                      COURSE:{" "}
                      <span className="font-normal">{teacher.course}</span>
                    </h2>
                  </div>
                </div>
                <button
                  onClick={() => viewProfile(teacher)}
                  className="w-[120px] h-[40px] bg-blue-950 flex justify-center items-center text-white rounded-[8px]"
                >
                  Visit Profile
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Instructors;

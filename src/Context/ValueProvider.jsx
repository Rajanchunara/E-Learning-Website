import { createContext } from "react";

import image1 from '../assets/Instructor/image.png';
import image2 from '../assets/Instructor/image copy.png';
import image3 from '../assets/Instructor/image copy 2.png';
import image4 from '../assets/Instructor/image copy 3.png';
import image5 from '../assets/Instructor/image copy 4.png';


export const ValueContext = createContext(0)



export const ValueProvider = ({ children }) => {

    const instructorsData = [
        { id: 1, name: 'NANCY WHITE', course: 'UI/UX Design, Graphic Design, Digital Marketing', image: image1 },
        { id: 2, name: 'HENRY SMITH', course: 'Data Science, MERN Stack', image: image2 },
        { id: 3, name: 'CHARLOTTE', course: 'COURSE: Web Development, Brand Management', image: image3 },
        { id: 4, name: 'JORDAN', course: 'Project Management, Public Speaking & Presentation Skills', image: image4 },
        { id: 5, name: 'ETHAN', course: 'Business Analytics, 3D Modeling and Animation', image: image5 },
    ]


return (
    <ValueContext.Provider value={instructorsData}>
        {children}
    </ValueContext.Provider>
)
}
export default ValueProvider
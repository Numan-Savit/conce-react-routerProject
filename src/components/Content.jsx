
import { useLoaderData } from "react-router-dom"
import placeholderImage from '../assets/404.jpg'


const Content = () => {
    const blog = useLoaderData()
    const {cover_image, title, description, published_at}=blog
    
    return (
        <div className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-100">
        <img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500" src={cover_image || placeholderImage} />
        <div className="p-6 space-y-2">
            <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
            <span className="text-xs text-gray-100">{published_at}</span>
            <p>{description}</p>
        </div>
       </div>
    );
};

export default Content;
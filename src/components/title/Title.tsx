import { useContext } from "react"
import './Title.css';
import { AppContext } from "../../App"

export const Title: React.FC = () => {
    const context = useContext(AppContext)
    return (
        <div className="title-container">
            <h3 className="title">
                Post #{context?.query} Comments
            </h3>
        </div>
    );
};

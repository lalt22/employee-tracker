import {Link} from "react-router-dom";

interface PageCardProps {
    pageRoute: string,
    pageName: string
}

const PageCard = ({pageRoute, pageName}: PageCardProps) => {
    return (
        <div className="page-card">
            <Link to={pageRoute}>
                <h2>{pageName}</h2>
            </Link>
        </div>
    )
}

export default PageCard;
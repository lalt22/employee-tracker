import PageCard from "../../components/PageCard/PageCard";
import "./HomePage.scss"
const HomePage = () => {
    return (
        <div className="home-page">
            <h1 className="welcome">Welcome!</h1>
            <div className='page-card-list'>
                <PageCard pageRoute='employees' pageName='See All Employees' />
                <PageCard pageRoute="new" pageName="Create New Employee" />
            </div>
        </div>

    )
}

export default HomePage;
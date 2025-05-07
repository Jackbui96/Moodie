import Banner from "../../components/Banner/Banner.jsx";

export default function Movie() {
    return (
        <div className="w-screen h-screen">
            <Banner />
            <div className="w-screen h-full bg-teal-400">
                <div className="items-center">
                    <h3>Browse All Movies</h3>
                </div>
            </div>
        </div>
    )
}

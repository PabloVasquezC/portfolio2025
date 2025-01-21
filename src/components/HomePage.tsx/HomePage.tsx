import NavBar from "../NavBar/NavBar";

export default function HomePage() {
    return (
        <div>
        <NavBar />
        <div className='flex justify-center items-center h-screen'>
            <h1 className='text-5xl'>HomePage</h1>
        </div>
        </div>
    )
    }
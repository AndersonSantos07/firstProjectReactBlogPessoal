import { useNavigate, Link } from "react-router-dom";


function Home() {

    let navigate = useNavigate()

    return (

        <div>
            <h2 className='text-slate-900 text-5x1 m-4'>Home</h2>
            <div>
                <button className='hover:underline mx-4' type='submit' onClick={() => { navigate('/login') }}>Login useNavigate</button>
            </div>
            <Link to="/login" className='hover:underline mx-4'>Login por Link</Link>
        </div>
    )
}

export default Home;
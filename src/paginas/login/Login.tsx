import {useNavigate, Link} from 'react-router-dom'

const Login = () =>{

    let navigate = useNavigate()

    return (

        <div>
            <h2 className='text-slate-900 text-5x1 m-4'>Login</h2>
            <div>
                <button className='hover:underline mx-4' type='submit' onClick={()=>{navigate('/home')}}>Login useNavigate</button>
            </div>
            <Link to="/home" className='hover:underline mx-4'>Home por Link</Link>
        </div>
    )
}

export default Login;
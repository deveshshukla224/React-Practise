import img from '../images/me.jpg'
function Content() {
    return(
        <main className='main-content'>
            <div className="image-container">
                <img className='profile_pic' src={img} alt="devesh_shukla"/>
            </div>
            <div className='text-container'>
                <h3>Devesh Shukla</h3>
                <h4> Front End Developer Intern</h4>
                <a href='https://twitter.com/deveshshukla224'>Devesh's Website </a>
                <div>
                    <button>Email</button>
                    <button>LinkedIn</button>
                </div>
                <h3>
                    About
                </h3>
                <p>
                    I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.
                </p>

                <h3>
                    Interests
                </h3>

                <p>
                    I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.
                </p>
            </div>
        </main>
    )
}
export default Content;
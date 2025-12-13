import Skills from "../skills/Skills";

const Hero = () => {


    return(
        <section className="container">
            <div className="row">
                <div className="col"  >
                    <h2 className="mx-auto fs-1" style={{width: "max-content"}}>Hello Everyone!</h2>
                    <p className="mx-auto" style={{width: "max-content"}}>I'm a full-stack developer. Welcome to my portfolio!</p>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h2 className="text-center">Skills</h2>
                    <Skills />
                </div>
            </div>
        </section>
    );
}

export default Hero;
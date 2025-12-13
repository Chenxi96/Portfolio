
const Projects = () => {
    return(
        <main className="container mt-5">
            <div className="row">
                <h2 className="text-center">Projects</h2>
            </div>
            <div className="row gap-2">
                <div className="col card">
                    <img style={{"width": "100%"}} src="/Resume_Suggestion_App.png" className="card-img-top" alt="Shows the deployed App's home page" />
                    <div className="card-body">
                        <h2 className="card-title">Resume Keyword Suggestion</h2>
                        <p className="card-text">This project is made to help with the competitive job market, it is used to parse the keywords from job descriptions and using AI return keyword suggestions for each section of your resume.</p>
                        <a href="https://resume-keyword-suggestion.onrender.com/" className="btn btn-primary">Go to site!</a>
                    </div>
                </div>
                <div className="col card">
                    <img style={{"width": "100%"}} src="Product_List_With_Cart.png" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h2 className="card-title">Product List with cart</h2>
                        <p className="card-text">This project helped me understand how to connect HTML, CSS, Javascript together and used jquery to speed up the process of development.</p>
                        <a href="https://chenxi96.github.io/Product-List-With-Cart/" className="btn btn-primary">Go to site!</a>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Projects;
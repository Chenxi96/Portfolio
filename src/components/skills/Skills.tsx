import { useState, useEffect } from "react"

interface skills {
    title: string,
    body: string,
    image: string,
}


const Skills = () => {
    const [skills, setSkills] = useState<Array<skills>>();

    useEffect(() => {
        const getSkills = async () => {
            const res = await fetch('https://admin-page-2pcv.onrender.com/api/listskills', {
                method: 'GET'   
            })
            const skills = await res.json();
            setSkills(skills)
        }
        getSkills();
    }, [])

    return(
        <section className="container">
            <div className="row gap-2 justify-content-center">
                {skills && skills.map(({body, title, image}, key) => {
                    return (
                        <div key={key} className="card" style={{ width: "10rem", padding: "1em 0 0 0"}}>
                            <img style={{ width: "2rem", margin: "auto"}} src={image} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-center">{title}</h5>
                                <p className="card-text text-center">{body}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )

}

export default Skills;
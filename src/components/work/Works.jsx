import { useEffect, useState } from 'react';
import { projectsData } from './Data';
import { projectsNav } from './Data';
import WorksItems from './WorksItems';
const Works = () => {
    const [item, setItem] = useState({ name: "all" });
    const [projects, setProjects] = useState([]);
    const [active, setActive] = useState(0);
    useEffect(() => {
        if (item.name === 'all') {
            setProjects(projectsData);
        } else {
            const newPojects = projectsData.filter((project) => {
                return project.category.toLowerCase() === item.name;
            });
            setProjects(newPojects)
        }
    }, [item]);
    const handleClick = (e, index) => {
        setItem({ name: e.target.textContent.toLowerCase() })
        setActive(index)
    }
    return (
        <>
            <div className="work_filters">
                {projectsNav.map((item, index) => {
                    return <span onClick={(e) => {
                        handleClick(e, index)
                    }}
                        className={`${active === index ? 'active-work' : ""} work_item`}
                        key={index}>{item.name}</span>
                })}
            </div >
            <div className="work_container container grid">
                {projects.map((item) => {
                    return (
                        <div key={item.id}>
                            <WorksItems item={item} />
                        </div>
                    );
                })}
            </div>

        </>

    )
}

export default Works
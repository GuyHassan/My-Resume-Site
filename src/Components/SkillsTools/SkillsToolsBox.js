import React from 'react'
const SkillsToolsBox = ({ logo, title, key }) => {
    return (
        <li key={key}  >
            <img src={logo} alt="Avatar" className="image" />
            <div className="middle" >
                <h2 className="text">{title}</h2>

            </div>
        </li>
    )
}
export default SkillsToolsBox;
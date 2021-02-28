import React from 'react'
const SkillsToolsBox = ({ logo, title, key }) => {
    return (
        <li key={key}  >
            <img src={logo} alt="Avatar" className="image" />
            <div className="middle" >
                <h3 className="text">{title}</h3>

            </div>
        </li>
    )
}
export default SkillsToolsBox;
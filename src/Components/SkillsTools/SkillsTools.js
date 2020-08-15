import React, { useState } from "react";
import './SkillsTools.css';
import SkillsToolsBox from './SkillsToolsBox';
import { SkillsToolsProperties } from './SkillsToolsAssets';
const SkillsTools = () => {
    const [colorBoxes, setColorBoxes] = useState(['#FF6F61', '#F7CAC9', '#92A8D1', '#955251', '#009B77', '#DD4124', '#45B8AC', '#EFC050', '#DFCFBE', '#DD4124', '#45B8AC', '#EFC050', '#DFCFBE', '#DD4124', '#45B8AC', '#EFC050']);
    const PropertiesTools = SkillsToolsProperties();
    const renderListTools = () => {
        return (
            colorBoxes.map((color, index) => {
                return (
                    <SkillsToolsBox {...PropertiesTools[index]} key={String(index)} />
                )
            })

        )
    }
    return (
        <div className="SkillsTools" id="SkillsTools">
            <h1 className="SkillsToolsTitle">Skills & Tools</h1>
            <hr />
            <h4>Knowledge of these technologies</h4>
            <ul>
                {renderListTools()}
            </ul>
        </div>
    )
}
export default SkillsTools;
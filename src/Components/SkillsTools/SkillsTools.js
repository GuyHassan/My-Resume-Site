import React from "react";
import './SkillsTools.css';
import SkillsToolsBox from './SkillsToolsBox';
import { SkillsToolsProperties } from './SkillsToolsAssets';
const SkillsTools = () => {
    const PropertiesTools = SkillsToolsProperties();
    const renderListTools = () => {
        return PropertiesTools.map((Tool) => {
            return <React.Fragment key={Tool.title}> <SkillsToolsBox {...Tool} /></React.Fragment>
        }
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
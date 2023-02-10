import React from "react";
import "../assets/styles/skills.css";
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import { Chart } from "react-google-charts";

const StyledRating = styled(Rating)({

});
export const Database = [
    ["Task", "Hours per Day"],
    ["MySQL", 5],
    ["PostgreSql", 4],
    ["OracleDb", 4],
    ["MongoDb", 2],
];

export const options = {
    pieSliceText: "label",
    is3D: true,
}

export default function SkillComponent(props) {
    const { darkMode, setDarkMode } = props;
    let theme;
    if (darkMode) {
        theme = "#efefefaa";
    } else {
        theme = "#222222aa";
    }

    return (
        <div className="skills section"
            id="skills">
            <div className="wrapper_skills">
                <h1 className="skillsHead">Skills</h1>
                <br />
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h3 className="heading">Core Programming </h3>
                            <span className="subheading">C/C++</span><br />
                            <StyledRating
                                name="customized-color"
                                defaultValue={3.5}
                                precision={.5}
                                readOnly="true"
                                icon={<i class="fa-solid fa-snowflake green" aria-hidden="true">&nbsp;</i>}
                                emptyIcon={<i class="fa-solid fa-snowflake grey" aria-hidden="true">&nbsp;</i>}
                            />
                            <br />
                            <span className="subheading">Java</span><br />
                            <StyledRating
                                name="customized-color"
                                defaultValue={4}
                                readOnly="true"
                                precision={.5}
                                icon={<i class="fa-solid fa-snowflake green" aria-hidden="true">&nbsp;</i>}
                                emptyIcon={<i class="fa-solid fa-snowflake grey" aria-hidden="true">&nbsp;</i>}
                            />
                            <br />
                            <span className="subheading">Python</span><br />
                            <StyledRating
                                name="customized-color"
                                defaultValue={4}
                                readOnly="true"
                                precision={.5}
                                icon={<i class="fa-solid fa-snowflake green" aria-hidden="true">&nbsp;</i>}
                                emptyIcon={<i class="fa-solid fa-snowflake grey" aria-hidden="true">&nbsp;</i>}
                            />
                            <br />
                        </div>
                        <div className="col">
                            <h3 className="heading">Web Developing </h3>
                            <span className="subheading">HTML</span><br />
                            <StyledRating
                                name="customized-color"
                                defaultValue={4.5}
                                precision={.5}
                                readOnly="true"
                                icon={<i class="fa-solid fa-cloud green" aria-hidden="true">&nbsp;</i>}
                                emptyIcon={<i class="fa-solid fa-cloud grey" aria-hidden="true">&nbsp;</i>}
                            />
                            <br />
                            <span className="subheading">CSS</span><br />
                            <StyledRating
                                name="customized-color"
                                defaultValue={4}
                                readOnly="true"
                                precision={.5}
                                icon={<i class="fa-solid fa-cloud green" aria-hidden="true">&nbsp;</i>}
                                emptyIcon={<i class="fa-solid fa-cloud grey" aria-hidden="true">&nbsp;</i>}
                            />
                            <br />
                            <span className="subheading">JavaScript</span><br />
                            <StyledRating
                                name="customized-color"
                                defaultValue={3.5}
                                readOnly="true"
                                precision={.5}
                                icon={<i class="fa-solid fa-cloud green" aria-hidden="true">&nbsp;</i>}
                                emptyIcon={<i class="fa-solid fa-cloud grey" aria-hidden="true">&nbsp;</i>}
                            />
                            <br />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <h3 className="heading">Database Management </h3>
                            <span className="subheading">MySQL</span><br />
                            <StyledRating
                                name="customized-color"
                                defaultValue={4.5}
                                precision={.5}
                                readOnly="true"
                                icon={<i class="fa fa-leaf green" aria-hidden="true"></i>}
                                emptyIcon={<i class="fa fa-leaf grey" aria-hidden="true"></i>}
                            />
                            <br />
                            <span className="subheading">PostgreSQL</span><br />
                            <StyledRating
                                name="customized-color"
                                defaultValue={4}
                                readOnly="true"
                                precision={.5}
                                icon={<i class="fa fa-leaf green" aria-hidden="true"></i>}
                                emptyIcon={<i class="fa fa-leaf grey" aria-hidden="true"></i>}
                            />
                            <br />
                            <span className="subheading">MongoDb</span><br />
                            <StyledRating
                                name="customized-color"
                                defaultValue={2.5}
                                readOnly="true"
                                precision={.5}
                                icon={<i class="fa fa-leaf green" aria-hidden="true"></i>}
                                emptyIcon={<i class="fa fa-leaf grey" aria-hidden="true"></i>}
                            />
                            <br />
                            <span className="subheading">OracleDb</span><br />
                            <StyledRating
                                name="customized-color"
                                defaultValue={3.5}
                                readOnly="true"
                                precision={.5}
                                icon={<i class="fa fa-leaf green" aria-hidden="true"></i>}
                                emptyIcon={<i class="fa fa-leaf grey" aria-hidden="true"></i>}
                            />
                            <br />
                        </div>
                        <div className="col">
                            <h3 className="heading">Libraries and Frameworks </h3>
                            <span className="subheading">React</span><br />
                            <StyledRating
                                name="customized-color"
                                defaultValue={4}
                                precision={.5}
                                readOnly="true"
                                icon={<i class="fa-solid fa-screwdriver-wrench green" aria-hidden="true">&nbsp;</i>}
                                emptyIcon={<i class="fa-solid fa-screwdriver-wrench grey" aria-hidden="true">&nbsp;</i>}
                            />
                            <br />
                            <span className="subheading">Bootstrap/ Material UI</span><br />
                            <StyledRating
                                name="customized-color"
                                defaultValue={4}
                                readOnly="true"
                                precision={.5}
                                icon={<i class="fa-solid fa-screwdriver-wrench green" aria-hidden="true">&nbsp;</i>}
                                emptyIcon={<i class="fa-solid fa-screwdriver-wrench grey" aria-hidden="true">&nbsp;</i>}
                            />
                            <br />
                            <span className="subheading">SpringBoot</span><br />
                            <StyledRating
                                name="customized-color"
                                defaultValue={3.5}
                                readOnly="true"
                                precision={.5}
                                icon={<i class="fa-solid fa-screwdriver-wrench green" aria-hidden="true">&nbsp;</i>}
                                emptyIcon={<i class="fa-solid fa-screwdriver-wrench grey" aria-hidden="true">&nbsp;</i>}
                            />
                            <br />
                            <span className="subheading">Express and NodeJS</span><br />
                            <StyledRating
                                name="customized-color"
                                defaultValue={3}
                                readOnly="true"
                                precision={.5}
                                icon={<i class="fa-solid fa-screwdriver-wrench green" aria-hidden="true">&nbsp;</i>}
                                emptyIcon={<i class="fa-solid fa-screwdriver-wrench grey" aria-hidden="true">&nbsp;</i>}
                            />
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
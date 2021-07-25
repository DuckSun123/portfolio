import React from 'react';
import './index.less';
import ImageGood from '../../assets/mimoji/good.png';
import { Timeline, Progress } from 'antd';
import { skills, timelines } from './structure';

const About = () => {
    return (
        <div id="aboutContainer">
            <div className="about-flex-container">
                <div className="image-wrap">
                    <div>
                      <img src={ImageGood} alt="" />
                    </div>
                </div>
                <div className="desc-wrap">
                    <p>HI! <span>I'm Jaehyuk Lee!</span></p>
                    {/* <p>DEVELOPER</p> */}
                    <div className="timeline-wrap">
                        <p>준비된 Front-end 개발자 이재혁 입니다.</p>
                        <h4>TMI..</h4>
                        <Timeline>
                            {timelines.map((item, key) => (
                                <Timeline.Item key={key} color={item.color}>{item.title}</Timeline.Item>
                            ))}
                        </Timeline>
                    </div>
                    
                </div>
            </div>
            <p className="desc-content">
                "많은 경험과 인내심만 있다면 뭐든지 할 수 있다."<br />
                개발의 모든 것을 할 수 있는 날까지 노력하겠습니다!
            </p>
            <div className="skill-wrap">
                <h3>SKILLS</h3>
                <ul>
                    {skills.map((item, i) => (
                        <li key={i}>
                            <p>{item.title}</p>
                            <Progress type="circle" percent={item.status} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default About;

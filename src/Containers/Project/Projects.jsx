import React, { useEffect, useState } from 'react';
import { Modal } from 'antd'; 
import Card from '../../Components/Card';
import './index.less';
import { projectList, projectDetailList } from './struckture';
const Projects = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [showProject, setshowProject] = useState({});

    const showModal = (id) => {
        setshowProject(projectDetailList.find(x => x.key === id));
        setIsModalVisible(true);
    };
  
    const handleOk = () => {
      setIsModalVisible(false);
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };

    useEffect(() => {
        let targetElements = document.querySelectorAll(".card");
        window.VanillaTilt.init(targetElements, {
            max: 25,
            speed: 400,
            glare: true,
            'max-glare': 1
        });

        return () => {
            if (targetElements && targetElements.vanillaTilt) {
                targetElements.vanillaTilt.destroy();
            }
        };
    }, []);

    return (
        <div id="projectContainer">
            <h3>PROJECT</h3>
            <div className="container">
                {projectList.map((item) => <Card key={item.key} item={item} onClick={showModal} />)}
            </div>

            <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                {showProject.title}
                {showProject.content}
            </Modal>
        </div>
    );
}

export default Projects;

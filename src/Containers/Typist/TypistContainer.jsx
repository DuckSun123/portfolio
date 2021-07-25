import React, { useEffect, useState } from 'react';
import Typist from 'react-typist';
import ScrollGuide from '../../Components/ScrollGuide/ScrollGuide';
import './index.less'
const TypistContainer = () => {
    const [count, setCount] = useState(1);

    useEffect(() => {
        setCount(1);
    }, [count]);

    return (
        <>
        <div className="typist-wrap">
            {count ? <Typist onTypingDone={() => setCount(0)}>
                <span>안녕하세요🤙</span>
                <Typist.Backspace count={8} delay={1000} />
                <span>이재혁 포트폴리오입니다👍</span>
                <Typist.Backspace count={15} delay={1000} />
            </Typist> : ("")}
        </div>
        <ScrollGuide />

        </>
        
    );
}

export default TypistContainer;

import { scrollSvg } from '@/constant/scroll';
import React from 'react';

const SectionHeader = () => {
    return (
        <div className=' xl:h-24' dangerouslySetInnerHTML={{__html:scrollSvg}}>
            
        </div>
    );
};

export default SectionHeader;
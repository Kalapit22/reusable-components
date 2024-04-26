import { useState,useMemo } from "react";

interface Props {
    maskSource: string;
    percentage: any;
    fillColor: string;
    siluetheColor: string;
    width?: string;
    height?: string;
}

const MaskImage = ({ maskSource, percentage, fillColor, siluetheColor}: Props) => {

    /* Temporal comver string to number*/

    percentage = useMemo(() => {
        return percentage.search(/[%]/) > 0 ? parseInt(percentage.replace('%','')) : parseInt(percentage);
    },[percentage])


    const [hovered, setHovered] = useState<boolean>(false);

    if (maskSource === undefined || maskSource === '') throw new Error('maskSource is required');
    if (percentage === undefined) throw new Error('percentage is required');
    if (fillColor === undefined || fillColor === '') throw new Error('fillColor is required');
    if (siluetheColor === undefined || siluetheColor === '') throw new Error('siluetheColor is required');

    const style: React.CSSProperties = {
        position: 'relative',
        maskImage: `url('${maskSource}')`,
        WebkitMask: `url('${maskSource}')`,
        maskSize: 'contain',
        WebkitMaskSize: 'contain',
        maskRepeat: 'no-repeat',
        WebkitMaskRepeat: 'no-repeat',
        background: `linear-gradient(to top, ${fillColor} ${percentage}%, ${siluetheColor} ${percentage}%)`,
        backgroundSize: 'contain',
        width: '100%',
        height: '100%'
    };

    const tooltipStyle: React.CSSProperties = {
        position: 'absolute',
        bottom: percentage > 95 ? 'auto' : `${percentage}%`,
        top: percentage > 95 ? `${percentage - 5}%` : 'auto',
        left: '50%',
        backgroundColor: '#0197B3',
        padding: '5px',
        borderRadius: '15px',
        fontSize: '15px',
        fontFamily: 'Lucida Sans',
        fontWeight: 'bold',
        color: '#fff',
        visibility: hovered ? 'visible' : 'hidden',
    }




    return (
        <div className="mask" style={style} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
             <div style={tooltipStyle} className="tooltip">{percentage}% 
             </div>
         </div>
    );
};

export default MaskImage;

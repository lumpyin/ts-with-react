import React,{useState,useEffect} from 'react';
import useMousePostion from '../hooks/useMousePositions'; 
import useMousePosition from '../hooks/useMousePositions';

const LikeButton:React.FC = ()=> {
    const [like,setLike] = useState(0);
    
    const positions = useMousePosition();
    useEffect(()=> {
        console.log('document title effect is running');
        document.title = `click ${like} times`
    },[like])

    function handleAlertClick(){
        setTimeout(()=> {
            alert('you click on' + like);
        },3000)
    }
    return (
        <>
            <h2>X :{positions.x}, Y : {positions.y}</h2>
            <button onClick = {()=> {setLike(like + 1)}}>
                {like}
            </button>
            <button onClick = {handleAlertClick}>
               Alert!
            </button>
        </>
    )
}

export default LikeButton;
import React,{useState,useEffect,useRef} from 'react';
import useMousePostion from '../hooks/useMousePositions'; 
import useMousePosition from '../hooks/useMousePositions';

const LikeButton:React.FC = ()=> {
    const [like,setLike] = useState(0);
    const likeRef = useRef(0);
    const didMountRef = useRef(false);
    const domRef = useRef<HTMLInputElement>(null);
    useEffect(()=> {
        console.log('document title effect is running');
        document.title = `click ${like} times`
    },[like])

    useEffect(()=> {
        if(didMountRef.current){
            console.log('this is update');
        }else{
            didMountRef.current = true;
        }
    })

    useEffect(()=> {
        if(domRef && domRef.current){
            domRef.current.focus();
        }
    })
    function handleAlertClick(){
        setTimeout(()=> {
            alert('you click on' + likeRef.current);
        },3000)
    }
    return (
        <>
            <input type="text" ref={domRef}></input>
            <button onClick = {()=> {setLike(like + 1);likeRef.current++}}>
                {like}
            </button>
            <button onClick = {handleAlertClick}>
               Alert! 
            </button>
        </>
    )
}

export default LikeButton;
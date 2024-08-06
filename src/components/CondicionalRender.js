import { useState } from 'react';



 const CondicionalRender = () => {
    const [x] = useState(false);

    return (
        <div className='box_condicional'>
            <h5>condicionalRender</h5>
            <h6>Isso sera exibido?</h6>
            {x && <p>Se for true, sim!</p>}
            {! x && <p>agora o x  isto e false</p>}
        </div>
    )
}
export default CondicionalRender;
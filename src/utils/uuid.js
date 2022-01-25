import { v4 as uuidv4 } from 'uuid';
export default ()=>{
    if(!sessionStorage.getItem('uuid')){
        sessionStorage.setItem('uuid',uuidv4())
    }
    return sessionStorage.getItem('uuid')
}
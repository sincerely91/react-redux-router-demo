import { useSelector } from "react-redux";

const Alert = () => {
    const {is_error, err_msg} = useSelector(state => state.errors)
    //const is_error = false;
   
    return (
        <>
            {is_error 
            ? 
            (
                <div className="alert alert-danger" role="alert">
                    {err_msg}
                </div>
            ) : 
            ('')
            }
        </>
        
    );
}
 
export default Alert;
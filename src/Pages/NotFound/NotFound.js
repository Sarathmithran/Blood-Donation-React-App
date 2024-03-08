import Images from './Images/error.png'

const NotFound = () => {
    return ( 
        <div className="container">
            <div className="row">
                <div className="col d-flex justify-content-center">
                    <img src={Images} style={{height:'550px'}}/>
                </div>
            </div>
        </div>
     );
}
 
export default NotFound;
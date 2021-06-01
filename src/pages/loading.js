import React from 'react';
import PageContent from '../components/layout/PageContent';


const Loader = () => {
    return(
        <PageContent>
            <div style={{width: "vw", height:"vh", margin: "0 auto"}}>
                <i className="fa fa-spinner fa-spin" style={{width: "vw", height:"vh", margin: "0 auto"}}></i>
            </div>
        </PageContent>
    )
}

export default Loader;
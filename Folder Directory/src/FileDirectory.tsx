import React, { useState } from "react";
import Data from "./data.json"


type fileProp = { 
    id: string,
    filename: string,
    filetype: string,
    children: fileProp[]  
}


const File = ( { file } : {file: fileProp[]}) => { 
    return <>
     <div>     
            {
             
                file.map ( item => { 
                    return <div> 
                        <span>{item.filename}</span>
                        { 
                        item.children && item.filetype === "folder" && 
                        <div style={{ marginLeft:"20px"}}>
                            <File file={item.children}/>
                        </div>
                        }
                    
                    </div>
                })
            }    
        </div> 

    
    </>
} 

export default function FileDirectory( ) : React.ReactNode {

    const [data,_ ] = useState(Data); 

    return (

        <React.Fragment>

            <div style={{
                margin:"40px",
                textAlign:"left"
            }}>
                <File file={data} />

            </div>


        </React.Fragment>


    )

}
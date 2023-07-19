import React,{Component} from 'react';
import Image from 'react-bootstrap/Image';

export class Home extends Component{

    render(){
            return(    
                <div className='mt-5 d-flex justify-content-left'>
                    <Image src="schoolBus.gif" fluid />
                </div>
            )
        }
}
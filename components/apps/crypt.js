import React, { Component } from 'react';
import $ from 'jquery';

export class Crypt extends Component {
    constructor() {
        super(); 
        this.cryptItems = [
            {
                name: "crypt_encode",
                icon: "./themes/filetypes/php.png",
            },
            {
                name: "password",
                icon: "./themes/filetypes/php.png",   
            },
            {
                name: "crypt_compare",
                icon: "./themes/filetypes/php.png",
            },
            {
                name: "hash_crypt",
                icon: "./themes/filetypes/php.png",   
            },
            {
                name: "secure_crypt",
                icon: "./themes/filetypes/php.png",
            },
            {
                name: "user_crypt",
                icon: "./themes/filetypes/php.png",
            },
            {
                name: "crypt_test",
                icon: "./themes/filetypes/php.png",
            },
            {
                name: "crypt_utils",
                icon: "./themes/filetypes/php.png",
            },
            {
                name: "enc_passwd",
                icon: "./themes/filetypes/php.png",
            },
            {
                name: "salted_crypt",
                icon: "./themes/filetypes/php.png",
            },
            {
                name: "crypt_verify",
                icon: "./themes/filetypes/php.png",
            },
            {
                name: "crypt_manager",
                icon: "./themes/filetypes/php.png",
            },
        ];
    }
    

    openApp = () => {
        if (!this.props.isMinimized[this.id] && this.props.isClose[this.id]) {
            this.scaleImage();
        }
        this.props.openApp(this.id);
        this.setState({ showTitle: false });
    };
    focusFile = (e) => {
        // icon
        $(e.target).children().get(0).classList.toggle("opacity-60");
        // file name
        $(e.target).children().get(1).classList.toggle("bg-ub-blue");
    }
    

    render() {
        return (
            
            <div className="w-full h-full flex flex-col bg-ub-cool-grey text-white select-none">
            <div className="flex-grow ml-4 flex flex-wrap items-start content-start justify-start overflow-y-auto windowMainScreen">
                
                {
                    this.cryptItems.map((item, index) => {
                        return (
                            <div  key={index} tabIndex="1" onFocus={this.focusFile} onBlur={this.focusFile} className="flex flex-col items-center text-sm outline-none w-16 my-2 mx-4">
                                
                                  
                                    <img src={item.icon} alt="Kali File Icons"   />
                                
                                <span className="text-center rounded px-0.5">{item.name}</span>
                                
                            </div>
                            
                        )
                    })
                }
            </div> </div>
        );
    }

}

export default Crypt;

export const displayCrypt = () => {
    return <Crypt> </Crypt>;
}

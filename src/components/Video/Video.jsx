import React from 'react';

export default function Video(props) {
    return (
        <div className="flex flex-col md:flex-row lg:flex-row w-full mx-auto px-4 md:px-0">
            <div className="w-full mt-4 md:ml-44 border-2 border-slate-400">
                <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                    <iframe 
                        src={props.link} 
                        title={props.title} 
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%'
                        }}
                        frameBorder="0" 
                        allowFullScreen>
                    </iframe>
                </div>
                <div className="mt-1 text-left text-xl text-black-600 p-2">
                    {props.title}
                    <p className="text-lg pt-4">
                        <strong>Description:</strong> {props.description}
                    </p>
                </div>
            </div>
        </div>
    );
}

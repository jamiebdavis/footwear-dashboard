import React, {createContext, useState} from 'react';

export const StatusContext = createContext();

/**
 * Not being used ****
 * Status information context.
 *
 * @param props
 * @return {React.Element} The rendered element.
 */
const StatusContextProvider = (props) => {
        const [statusInfo] = useState([
            {
                id: '0',
                colour: '#28dec9',
                description: 'Ready to try'
            },
            {
                id: '1',
                colour: '#66c0ed',
                description: 'On the way',
            },
            {
                id: '2',
                colour: '#e07a14',
                description: 'In the queue',
            },
            {
                id: '3',
                colour: '#c92f1e',
                description: 'Out of Stock',
            }
        ]);

        return (
            <StatusContext.Provider value={{statusInfo}}>
                {props.children}
            </StatusContext.Provider>
        );
    }
;

export default StatusContextProvider;
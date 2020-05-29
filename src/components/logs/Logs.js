import React,{useState, useEffect} from 'react'
import LogItem from './LogItem';
import PreLoader from  '../layout/PreLoader';

//import axios from 'axios';
const Logs = () => {
    const [logs, setLogs] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(()=> {
        getLogs();
        // eslint-disable-next-line
    }, [])
    const getLogs = async () => {
        setLoading(true);
        const res = await fetch("http://localhost:5000/logs");
        const data = await res.json();
        setLogs(data);
        setLoading(false);
    }

    if(loading) {
        return  <PreLoader />
    }
    return (
        <ul className="collection with-header">
            <li className="collection-header">
                <h4 className="center">
                    System logs
                </h4>
            </li>
            {!loading && logs.length === 0 ?
            (<p className="center">No Logs to show...</p>): (
           
                logs.map(log=> 
                    <LogItem log={log} key={log.id} />)
            )}
        </ul>
    )
}

export default Logs;

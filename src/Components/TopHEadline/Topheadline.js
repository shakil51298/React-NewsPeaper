import React, { useEffect, useState } from 'react';
import News from '../News/News';

const Topheadline = () => {

    const [articale,setArticale] = useState([]);

    useEffect(() => {
        fetch('http://newsapi.org/v2/everything?q=tesla&from=2021-02-02&sortBy=publishedAt&apiKey=0ffd00b2d993414c85d69d8283c226e5')
        .then(res => res.json())
        .then (data => setArticale(data.articles))
    }, [])
    return (
        <div>
            <h1>Top Head Line: {articale.length}</h1>
            <div>
                {
                    articale.map((news,idx)=> <News key={idx} news={news}></News>)
                }
            </div>
        </div>
    );
};

export default Topheadline;
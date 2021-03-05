import axios from 'axios';
import React, { useEffect, useState } from 'react';
import News from '../News/News';

const Topheadline = () => {

    const [article,setArticle] = useState([])
    

    useEffect(() => {
        const url ='http://newsapi.org/v2/everything?q=tesla&from=2021-02-04&sortBy=publishedAt&apiKey=0ffd00b2d993414c85d69d8283c226e5'
        axios(url)
        .then(data => setArticle(data.data.articles))

    }, [])

   
    return (
        <div>
            <h2>total article: {article.length}</h2>
            {
                article.map(article=><News news={article}></News>)
            }
        </div>
    );
};

export default Topheadline;
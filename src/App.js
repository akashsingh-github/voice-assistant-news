import React, {useEffect, useState} from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import wordsToNumbers from "word-to-numbers"; 

import NewsCards from "./Component/NewsCards/NewsCards";

const alanKey = 'a8181a3e40dc75fe829f92fd6d84554e2e956eca572e1d8b807a3e2338fdd0dc/stage';
function App(){
	const [newsArticles, setNewsArticles] = useState([]);
	const [activeArticle, setActiveArticle] = useState(-1);
	useEffect(() => {
		alanBtn({
			key: alanKey,
			onCommand: ({command, articles, number}) => {
				if(command === 'newHeadline'){
					setNewsArticles(articles)
				}else if(command === 'highlight'){
					setActiveArticle((prevArticle) => prevArticle + 1)
				}else if(command === 'open'){
					const articleNo = number.length > 2 ? wordsToNumbers(number, {fuzzy: true}) : number;
					console.log(articles[articleNo -1].url);
					if(articleNo > 20){
						alanBtn().playText('please try that again');
					}else{
						window.open(articles[articleNo -1 ].url, '_blank') 
					}
				}
			}
		})
	}, [])
	return(
		<>
			<h1 className="page-heading">Voice assistant using ALAN AI for News</h1>
			<NewsCards articles={newsArticles} activeArticle={activeArticle} />
		</>
	)
}
export default App;
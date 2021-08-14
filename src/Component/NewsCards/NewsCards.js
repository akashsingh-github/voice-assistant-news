import React from "react";
import { Grid, Typography, Grow } from "@material-ui/core";

import Newscard from "../NewsCard/NewsCard";
import useStyles from "./style.js";

function NewsCards({articles, activeArticle}){
    const classes = useStyles();
    const infoCards = [
        { color: '#00838f', title: 'Latest News', text: 'Give me some latest news'},
        { color: '#1565c0', title: 'News by Categories', info: 'Business, entertainment, sports, technology', text: 'Show me the news on business, entertainment'},
        { color: '#1565c0', title: 'News by Source', info: 'CNN', text: 'Give me some news from CNN'},
        { color: '#1565c0', title: 'News by Term', info: 'Bitcoin, Smartphone', text: "What's up with bitcoin"}

    ]

    if(!articles.length){
        return(
            <Grow in>
                <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                    {infoCards.map((infoCard) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} className="infocards">
                            <div className="card" style={{backgroundColor: infoCard.color}}>
                                <Typography variant="h5">{infoCard.title}</Typography>
                                {infoCard.info ? <h4 className="infocard-heading"><strong>{infoCard.title.split(' ')[2]}</strong> <br/><br/>{infoCard.info}</h4> : ''}
                                <h5 className="search-demo">Try saying: {infoCard.text}</h5> 
                            </div>
                        </Grid>
                    ))
                    
                    }
                </Grid>
            </Grow>
        )
    }

    return(
        <Grow in>
            <Grid container className={classes.container} alignItems="stretch" spacing={3}>
                {articles.map((article, i) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} style={{display: 'flex'}}>
                        <Newscard article={article} activeArticle={activeArticle} i={i} />
                    </Grid>
                ))}
            </Grid>
        </Grow>
    )
}
export default NewsCards;
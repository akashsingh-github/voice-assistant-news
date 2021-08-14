import React, {useState, useEffect, createRef} from "react";
import {Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography} from "@material-ui/core";
import classNames from "classnames";

import useStyles from "./style.js";
import "../../index.css";

function Newscard({article:{ description, publishedAt, source, title, url, urlToImage }, activeArticle, i}){
    const classes = useStyles();
    const [ elRefs, setElRefs] = useState([])
    const scrollToRef = (ref) => {
        window.scroll(0, ref.current.offsetTop - 50)
    }
    
    useEffect(() => {
        setElRefs((refs) => Array(20).fill().map((_, j) => refs[j] || createRef()));
    }, [])

    useEffect(() => {
        if( i === activeArticle && elRefs[activeArticle]){
            scrollToRef(elRefs[activeArticle])
        }
    }, [i, activeArticle, elRefs])

    return(
        <>
            <Card ref={elRefs[i]} className={classNames('news-card', activeArticle === i ? 'active-card':null)}>
                <CardActionArea href={url} target="_blank">
                    <CardMedia className={classes.media} image={urlToImage || 'https://images.pexels.com/photos/5820926/pexels-photo-5820926.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}/>
                    <div className="card-padding">
                        <div className="news-upper">
                            <Typography className="news-date" variant="body2" color="textSecondary" component="h2">
                                {(new Date(publishedAt)).toDateString()}
                            </Typography>
                            <Typography className="news-source" variant="body2" color="textSecondary" component="h2">{source.name}</Typography>
                        </div>
                        <Typography className="news-title" gutterBottom variant="h5">{title}</Typography>
                        <CardContent>
                            <Typography className="news-description" variant="body2" color="textSecondary" component="p">{description}</Typography>
                        </CardContent>
                    </div>

                </CardActionArea>
                <CardActions className="card-bottom">
                    <Button variant="text" size="small" color="primary">Lear more</Button>
                    <Typography className="art-no" variant="h5" color="textSecondary">{i+1}</Typography>
                </CardActions>
            </Card>
        </>
    )
}
export default Newscard;